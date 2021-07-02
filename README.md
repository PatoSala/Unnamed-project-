
# Unnamed-project

Top-Secret :)


## API Reference

#### Get client info

```http
  GET /api/clientInfo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `object` | Object containing current client info |

#### Get all chats

```http
  GET /api/getchats
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `array` | Array containing chat/s object |

#### Get chat

```http
  GET /api/getchat/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `object` | **Required**. Id of chat |

#### Get chat profile picture

```http
  GET /api/profilepic/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of chat |

#### Get chat messages

```http
  GET /api/getmessages/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `array` | **Required**. Id of chat  |

#### Send text message

```http
  POST /api/sendmessage
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body.id`      | `string` | **Required**. Id of chat  |
| `body.message` | `string` | **Required**. Message to send  |





  
