# Whatsapp-Web :)

## Api Documentation
### /api/getchats  
  Returns an array of objects with chat information. Each obj looks like this:  
    
  &nbsp;{  
  &nbsp;&nbsp;&nbsp;&nbsp; **id**: {},  
  &nbsp;&nbsp;&nbsp;&nbsp; **name**: "Chat Name",  
  &nbsp;&nbsp;&nbsp;&nbsp; **isGroup**: false, *//specifies if chat is a group or not*  
  &nbsp;&nbsp;&nbsp;&nbsp; **isReadOnly**: false,  
  &nbsp;&nbsp;&nbsp;&nbsp; **unreadCount**: number, *//number of unread messages*  
  &nbsp;&nbsp;&nbsp;&nbsp; **timestamp**: number,   
  &nbsp;&nbsp;&nbsp;&nbsp; **archived**: false, *//specifies if chat is archived*  
  &nbsp;&nbsp;&nbsp;&nbsp; **pinned**: false, *//specifies if chat is pinned*  
  &nbsp;&nbsp;&nbsp;&nbsp; **isMuted**: false, *//specifies if chat is is muted*  
  &nbsp;&nbsp;&nbsp;&nbsp; **muteExpiration**: 0  
  &nbsp;}


### /api/getchat/:phone
  Fetches selected chat.
  
### /api/getmessages/:phone
  Fetches all messages from selected chat. Returns an array of objects each being one message.
