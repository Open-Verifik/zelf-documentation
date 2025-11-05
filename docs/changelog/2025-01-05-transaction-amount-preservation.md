---
id: 2025-01-05-transaction-amount-preservation
title: Transaction Amount Preservation Fix
sidebar_position: 1
---

**Date:** January 5, 2025  
**Version:** Wallet Extension  
**Type:** Bug Fix

## Summary

Fixed a critical issue where transaction amounts were being incorrectly displayed as `0` instead of the actual sent amount when the blockchain API returned incomplete transaction data. This issue primarily affected Solana (SOL) transactions but could occur with any token/network when the API response didn't include the amount value.

## Problem

When sending SOL (or other native tokens), the transaction receipt page would show:
- **Amount displayed:** `0` ❌
- **Expected amount:** The actual amount sent by the user (e.g., `0.001 SOL`) ✅

The issue occurred because:
1. The blockchain API sometimes returns `tokensTransferred: []` (empty array) and `amount: ""` (empty string) for transactions that haven't fully propagated yet
2. When processing the API response, empty strings were converted to `0` or `NaN`
3. The merge logic was overwriting the original amount from the UI with the invalid API value

## Solution

Implemented a defensive merge strategy that preserves the original transaction data from the UI when the API returns invalid values:

### Key Changes

1. **Enhanced Merge Logic** (`wallet.service.ts`)
   - Created `mergeTransactionData()` method that intelligently merges API responses with pending transactions
   - Preserves original `amount`, `fee`, `fiatFee`, and `total` when API values are invalid (0, NaN, undefined, null, or empty)
   - Only updates values if the API provides valid data that matches the original (within floating-point tolerance)

2. **Transaction Receipt Component** (`transaction-receipt.component.ts`)
   - Stores original pending transaction data to preserve across API retries
   - Delegates merge logic to the shared `WalletService.mergeTransactionData()` method
   - Ensures the original amount is always available for comparison

3. **Code Consolidation**
   - Removed duplicate merge logic between service and component
   - Centralized merge logic in `WalletService` for consistency and maintainability

## Technical Details

### Validation Logic

The merge logic now checks if API values are invalid:
- **Invalid amount:** `0`, `NaN`, `undefined`, `null`, empty string, or falsy
- **Valid amount:** Must be a positive number that matches the original (within 0.00000001 tolerance for floating-point precision)

### Preservation Rules

- ✅ **Preserve original** if API value is invalid or doesn't match
- ✅ **Update with API** if API value is valid and matches original
- ✅ **Always preserve** other critical fields like `date`, `from`, `to`, `network`, `tokenType`, `symbol`
- ✅ **Always update** status from API (as it changes from "pending" to "success"/"failed")

## Files Modified

- `src/app/wallet.service.ts`
  - Added `mergeTransactionData()` public method
  - Updated `addTransactionToPending()` to use merge logic
  - Preserved `_mergePendingTransaction()` as deprecated alias

- `src/app/transaction-receipt/transaction-receipt.component.ts`
  - Added `_originalPendingTransaction` property to preserve original data
  - Updated `_requestTransactionDetails()` to load and preserve original pending transaction
  - Simplified `_mergeTransactionData()` to delegate to `WalletService`

## Impact

### Before Fix
- Users would see `0` as the transaction amount immediately after sending
- Amount would only appear correctly after ~30 seconds when API fully propagated
- Poor user experience with confusing transaction receipts

### After Fix
- ✅ Users immediately see the correct amount they sent
- ✅ Amount is preserved even when API returns incomplete data
- ✅ Works for all tokens/networks, not just SOL
- ✅ Status and other fields still update correctly from API

## Testing Recommendations

1. **Test Case:** Send SOL transaction
   - Verify amount displays correctly immediately
   - Verify amount persists even if API returns `amount: 0`
   - Verify status updates from "pending" to "success"

2. **Test Case:** Send other native tokens (ETH, BTC, etc.)
   - Verify same behavior across all networks

3. **Test Case:** Send ERC-20/BEP-20 tokens
   - Verify amount and fee are preserved correctly

## Related Issues

This fix addresses the scenario where:
- Blockchain APIs return incomplete transaction data immediately after broadcast
- Transaction data needs to be preserved from the UI until API fully propagates
- Users need accurate transaction information without waiting for API confirmation

## Notes

- The fix is defensive and works for all tokens/networks, not just Solana
- The merge logic uses floating-point tolerance to handle precision differences
- Original pending transaction data is preserved separately to ensure it's never lost during retries

