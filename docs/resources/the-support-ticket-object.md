---
id: the-support-ticket-object
title: The Support Ticket Object
description: The Support Ticket object represents customer support tickets and their threads
---

# The Support Ticket Object

The Support Ticket object represents customer support tickets and their threads for customer support and issue tracking. This object contains all the information needed to manage and track support requests.

## Attributes

**`title`** - String - Required

The title or subject of the support ticket.

**`description`** - String - Required

Detailed description of the issue or request.

**`status`** - String - Required

Current status of the support ticket. Can be:

* `open` - Ticket is open and awaiting response
* `pending` - Ticket is pending action
* `in_progress` - Ticket is being worked on
* `resolved` - Ticket has been resolved
* `closed` - Ticket is closed

**`priority`** - String - Required

Priority level of the ticket. Can be:

* `low` - Low priority
* `medium` - Medium priority
* `high` - High priority
* `urgent` - Urgent priority

**`category`** - String - Required

Category of the support ticket. Can be:

* `technical` - Technical issues
* `billing` - Billing and payment issues
* `account` - Account-related issues
* `feature_request` - Feature requests
* `general` - General inquiries

**`client`** - ObjectId - Required

Reference to the client who created the ticket.

**`assignedTo`** - ObjectId - Optional

Reference to the support agent assigned to handle the ticket.

**`threads`** - Array - Optional

Array of message threads in the ticket:

* `author` - Author of the message
* `message` - Message content
* `timestamp` - When the message was sent
* `type` - Type of message (user, agent, system)

**`attachments`** - Array - Optional

Array of file attachments:

* `filename` - Name of the file
* `url` - URL to access the file
* `size` - File size in bytes
* `type` - File type/MIME type

**`tags`** - Array - Optional

Array of tags for categorizing and filtering tickets.

**`resolution`** - String - Optional

Resolution details when the ticket is resolved.

**`createdAt`** - Date - Required

Timestamp when the support ticket was created.

**`updatedAt`** - Date - Required

Timestamp when the support ticket was last updated.

**`resolvedAt`** - Date - Optional

Timestamp when the ticket was resolved.

## Example Object

```json
{
  "_id": "support_ticket_123456789",
  "title": "API Integration Issue",
  "description": "Having trouble integrating the biometric validation API. Getting 401 errors.",
  "status": "in_progress",
  "priority": "high",
  "category": "technical",
  "client": "client_123456789",
  "assignedTo": "agent_123456789",
  "threads": [
    {
      "author": "client_123456789",
      "message": "I'm getting 401 errors when trying to use the biometric validation endpoint.",
      "timestamp": "2024-01-15T10:30:00Z",
      "type": "user"
    },
    {
      "author": "agent_123456789",
      "message": "I've reviewed your API key and it appears to be valid. Let me check the logs.",
      "timestamp": "2024-01-15T11:00:00Z",
      "type": "agent"
    }
  ],
  "attachments": [
    {
      "filename": "error_logs.txt",
      "url": "https://storage.verifik.co/attachments/error_logs.txt",
      "size": 1024,
      "type": "text/plain"
    }
  ],
  "tags": ["api", "authentication", "biometric"],
  "resolution": null,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T11:00:00Z",
  "resolvedAt": null
}
```
