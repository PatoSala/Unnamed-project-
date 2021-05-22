# Whatsapp-Web :)

## Api
### /api/getchats  
  Returns an array of objects with chat information. Each obj looks like this:  
  {  
  &nbsp;&nbsp;&nbsp; **id**: {},  
  &nbsp;&nbsp;&nbsp; name: "Chat Name",  
  &nbsp;&nbsp;&nbsp; isGroup: false, //specifies if chat is a group or not  
  &nbsp;&nbsp;&nbsp; isReadOnly: false,  
  &nbsp;&nbsp;&nbsp; unreadCount: number, //number of unread messages  
  &nbsp;&nbsp;&nbsp; timestamp: number,   
  &nbsp;&nbsp;&nbsp; archived: false, //specifies if chat is archived  
  &nbsp;&nbsp;&nbsp; pinned: false, //specifies if chat is pinned  
  &nbsp;&nbsp;&nbsp; isMuted: false, //specifies if chat is is muted  
  &nbsp;&nbsp;&nbsp; muteExpiration: 0  
  }
