---
id: support-tickets
title: Support Tickets
description: Manage support tickets and customer service interactions
---

# Support Tickets

Support tickets are a crucial part of managing customer interactions and resolving issues efficiently. They provide a structured way for support teams to address and track user issues.

## Introduction to Support Tickets

Support tickets are a crucial part of managing customer interactions and resolving issues efficiently. They provide a structured way for support teams to address and track user issues.

### Key Components

* **Client Interface**: Provides an easy-to-use platform for clients to submit and track their support tickets
* **Support Ticket API**: Facilitates integration with other systems for seamless ticket handling

## How Support Tickets Work

Every Support Ticket represents a single customer service interaction that tracks user issues, questions, and requests. When someone submits a support request, Verifik creates a Support Ticket to manage the entire support process from initial submission to resolution.

## What Support Tickets Track

Support Tickets are comprehensive tracking systems for customer service interactions:

### Ticket Information:
* Issue type and priority level
* User contact information
* Problem description and details
* Status and resolution tracking

### Support Process:
* Ticket assignment and routing
* Response times and SLA tracking
* Escalation and priority management
* Resolution and closure tracking

### Communication:
* Internal notes and comments
* External communication with users
* File attachments and documentation
* Status updates and notifications

## API Endpoints

### List Support Tickets
```http
GET https://api.verifik.co/v2/support-tickets
```

### Create a Support Ticket
```http
POST https://api.verifik.co/v2/support-tickets
```

### Retrieve a Support Ticket
```http
GET https://api.verifik.co/v2/support-tickets/{ticketId}
```

### Update a Support Ticket
```http
PUT https://api.verifik.co/v2/support-tickets/{ticketId}
```

## Support Ticket Object Structure

```json
{
  "id": "ticket_123456789",
  "subject": "Login Issue",
  "description": "Unable to access account",
  "priority": "medium",
  "status": "open",
  "assignedTo": "support_agent_123",
  "user": {
    "id": "user_123456789",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "resolvedAt": null
}
```

## Use Cases

- **Customer Support**: Manage and track customer service requests
- **Issue Resolution**: Streamline problem-solving processes
- **SLA Management**: Track response times and resolution metrics
- **Communication**: Maintain clear communication with users
