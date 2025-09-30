---
sidebar_position: 4
---

# BlockDAG Milestone 2: Name Service

## Overview

**Duration**: Weeks 5-8  
**Phase**: Name Service Implementation  
**Focus**: Domain resolution system and registration workflows

This milestone builds upon the foundation established in Milestone 1 to create a complete name service system for BlockDAG, including domain resolution, registration workflows, and payment integration.

---

## Deliverables

### 1. Dashboard for Licensing and Domain Analytics

**Objective**: Implement a dashboard with all the capabilities required to push the whole license agreement properly and analytics for the tags registered & zelfKeys registered.

**Tasks**:

General taks

- [x] Implement user registration/login system with face/liveness verification
- [x] Add password reset and account recovery workflows
- [x] Build user profile management with syncing to IPFS storage
- [x] Implement session management and security tokens
- [ ] Design domain|license screens in the dashboard
- [ ] Implement the Analytics screen with real data
- [ ] Build search functionality across all modules (Analytics, Tags, ZelfKeys)
- [ ] Create notification center with real-time alerts
- [ ] Finish the tags screen with real functionality > including adding years of lease
- [ ] Implement data export functionality (CSV, PDF, Excel)
- [ ] Build payment system for the license and individual tag payments with crypto, coinbase commerce and Stripe

For ZelfKeys Dashboard

- [ ] Design ZelfKeys management interface
- [ ] Design subscriptions screens for Zelf Key members

Settings & Billing

- [ ] Build Plan & Billing management with upgrade/downgrade flows
- [ ] Implement notification preferences and channel management
- [ ] Create team management with invitation workflows
- [x] Add API key management 


**Domain Rules**:
- Names must be 3-63 characters long
- Only alphanumeric characters and hyphens allowed
- Cannot start or end with hyphen
- Reserved names list (admin, www, api, etc.)

**Acceptance Criteria**:
- Dashboard loads in &lt;2 seconds with all modules functional
- User authentication system working with face/liveness verification
- Analytics screen displays real-time data with &lt;500ms refresh time
- Tags management screen supports CRUD operations and lease management
- Search functionality works across all modules with &lt;300ms response time
- Notification center delivers real-time alerts with &lt;1 second latency
- Data export functionality supports CSV, PDF, and Excel formats
- Payment system processes crypto, Coinbase Commerce, and Stripe payments
- ZelfKeys management interface allows creation, editing, and subscription management
- Settings screens (Plan & Billing, Notifications, Team) are fully functional
- Team management supports role-based permissions (Admin, Write, Read)
- API key management system operational with proper security
- Dashboard responsive design works on desktop, tablet, and mobile devices

**Estimated Effort**: 2 weeks

---

### 2. Multi domain support in Zelf Name Service app in Extension, Android & iOS

**Objective**: Extend Zelf Name Service functionality across all platforms with multi-domain support

**Tasks**:
- [ ] Implement multi-domain resolution in browser extension
- [ ] Add Android app support for multiple domains
- [ ] Add iOS app support for multiple domains
- [ ] Create cross-platform domain synchronization
- [ ] Build unified domain management interface
- [ ] Implement platform-specific domain caching

**Registration Flow**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            REGISTRATION WORKFLOW                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. NAME AVAILABILITY CHECK
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ User enters  │───▶│ Check name       │───▶│ Return available │
   │ desired name │    │ availability     │    │ or suggest      │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

2. BIOMETRIC REGISTRATION
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Face capture │───▶│ Generate ZelfProof│───▶│ Create wallet    │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Store proof  │◄───│ Generate QR code │◄───│ Encrypt metadata │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

3. PAYMENT PROCESSING
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Calculate    │───▶│ Process BDAG     │───▶│ Confirm payment  │
   │ registration │    │ payment          │    │ and activate     │
   │ fee          │    │                  │    │ name             │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
```

**Acceptance Criteria**:
- Browser extension resolves multiple domains with &lt;300ms response time
- Android app supports multi-domain functionality with offline caching
- iOS app supports multi-domain functionality with offline caching
- Cross-platform synchronization works seamlessly across all devices
- Unified domain management interface consistent across platforms
- Platform-specific caching improves performance by 70%

**Estimated Effort**: 2 weeks (mobile developer)

---

### 3. Payment Integration

**Objective**: Integrate BDAG token payments and detailed chain support

**Tasks**:
- [ ] Research how to accept BlockDAG payments
- [ ] Implement BDAG token payment processing
- [ ] Create dynamic pricing system based on name length and popularity
- [ ] Build payment confirmation and receipt system


**Payment Features**:
- BDAG token payment processing
- Multi-year registration discounts
- Payment confirmation emails
- Transaction history tracking

**Acceptance Criteria**:
- BDAG payments processing correctly
- Dynamic pricing system functional
- Payment confirmation system working
- Refund mechanisms tested and operational
- Payment analytics dashboard complete

**Estimated Effort**: 1.5 weeks

---

### 4. Demo Application UI

**Objective**: Create user-friendly demo application showcasing all features

**Tasks**:
- [ ] Design responsive web application UI
- [ ] Implement name search and registration interface
- [ ] Create biometric capture and processing UI
- [ ] Build name management dashboard
- [ ] Implement payment processing interface
- [ ] Add real-time status updates and notifications

**UI Components**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            DEMO APPLICATION UI                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Search Bar | Language Selector | User Menu                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│ ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐  │
│ │   Name Search   │    │   Registration  │    │     My Names Dashboard          │  │
│ │                 │    │                 │    │                                 │  │
│ │ • Search input  │    │ • Name input    │    │ • Active names list            │  │
│ │ • Suggestions   │    │ • Face capture  │    │ • Expiration dates             │  │
│ │ • Availability  │    │ • Payment form  │    │ • Renewal options               │  │
│ │ • Pricing info  │    │ • Confirmation  │    │ • Transfer options              │  │
│ └─────────────────┘    └─────────────────┘    └─────────────────────────────────┘  │
│                                                                                     │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │                           Registration Progress                                 │ │
│ │                                                                                 │ │
│ │ [Step 1: Name] → [Step 2: Biometric] → [Step 3: Payment] → [Step 4: Complete] │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Features**:
- Responsive design for mobile and desktop
- Real-time name availability checking
- Biometric capture with liveness detection
- Payment processing with BDAG tokens
- Name management dashboard
- Registration progress tracking

**Acceptance Criteria**:
- UI works on all major browsers and devices
- Biometric capture functional with liveness detection
- Payment processing integrated and working
- Name management dashboard complete
- User experience testing completed with positive feedback

**Estimated Effort**: 2 weeks

---

## Technical Architecture

### Name Service System

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            MILESTONE 2 ARCHITECTURE                                │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   Demo App UI    │     │                 Name Service Core                       │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Name Search  │ │────▶│ │ Resolution  │  │ Registration│  │ Payment         │   │
│ │ Interface    │ │     │ │ Engine      │  │ Workflow    │  │ Processing      │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Registration │ │────▶│ │ Availability│  │ Biometric   │  │ BDAG Token      │   │
│ │ Dashboard    │ │     │ │ Checker     │  │ Capture     │  │ Integration     │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Storage Layer                         │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Name        │  │ Metadata    │  │ Payment         │   │
                         │ │ Registry    │  │ Storage     │  │ Records          │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 BlockDAG Network                          │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Address     │  │ Transaction │  │ Smart Contract  │   │
                         │ │ Generation  │  │ Processing  │  │ Integration     │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---

## Success Metrics

### Technical Metrics

- **Name Resolution**: &lt; 250ms average resolution time
- **Registration Success**: &gt;95% successful registration rate
- **Payment Processing**: &lt;30 seconds payment confirmation
- **UI Performance**: &lt;2 seconds page load time

### Business Metrics

- **User Registration**: 100+ successful name registrations in testing
- **Payment Success**: &gt;98% payment processing success rate
- **User Satisfaction**: &gt;4.5/5 rating in user testing
- **System Uptime**: 99.9% availability during testing period

---

## Risk Mitigation

### Technical Risks

**Risk**: Name resolution performance issues  
**Mitigation**: Implement caching system and optimize database queries

**Risk**: Payment processing failures  
**Mitigation**: Multiple payment providers and comprehensive error handling

**Risk**: UI/UX complexity  
**Mitigation**: Iterative design process with user feedback integration

### Business Risks

**Risk**: User adoption challenges  
**Mitigation**: Comprehensive demo application and user education materials

**Risk**: Payment integration complexity  
**Mitigation**: Early integration testing and fallback payment methods

---

## Deliverables Summary

| Deliverable | Duration | Effort | Priority |
|-------------|----------|--------|----------|
| Dashboard for Licensing and Domain Analytics | 2 weeks | High | Critical |
| Multi domain support in Zelf Name Service app in Extension, Android & iOS | 2 weeks | High | Critical |
| Payment Integration | 1.5 weeks | Medium | High |

**Total Estimated Duration**: 4 weeks  
**Total Team Effort**: 3 person-weeks

---

## Next Steps

Upon completion of Milestone 2, the name service will be fully functional, enabling:

- **Milestone 3**: Advanced features including 2FA authentication and DID framework
- **Milestone 4**: Production deployment with community tools and analytics

The name service phase establishes the core user-facing functionality that will drive adoption and revenue generation for the BlockDAG ecosystem.
