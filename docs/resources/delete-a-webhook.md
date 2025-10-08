---
id: delete-a-webhook
title: Delete a Webhook
description: Permanently remove a specific webhook
---

# Delete a Webhook

**DELETE** `https://api.verifik.co/v2/webhooks/{id}`

This endpoint allows you to permanently delete a webhook from your Verifik account. This action cannot be undone and will completely remove the webhook configuration.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the webhook to delete.                 |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "delete",
  url: "https://api.verifik.co/v2/webhooks/webhook_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

## Response Example

```json
{
  "success": true,
  "message": "Webhook deleted successfully"
}
```

## Error Responses

```json
{
  "error": "Webhook not found",
  "message": "WEBHOOK_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```

## Important Notes

* **Permanent Deletion**: This action cannot be undone. All webhook configuration and statistics will be permanently removed.
* **Active Webhooks**: Consider deactivating webhooks before deletion to avoid interrupting ongoing processes.
* **Dependencies**: Deleting a webhook may affect related project flows or integrations.
