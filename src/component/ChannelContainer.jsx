import React, { useState } from 'react'
import { Channel, useChatContext, MessageSimple } from 'stream-chat-react'

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelContainer = ({ isCreating, setisCreating, isEditing, setisEditing, createType }) => {
  const { channel } = useChatContext();   // gives informaton about the current channel

  if(isCreating){
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setisCreating={setisCreating}/>
      </div>
    )
  }

  if(isEditing){
    return (
      <div className="channel__container">
        <EditChannel setisEditing={setisEditing}/>
      </div>
    )
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">This is the beginning of your chat history</p>
      <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
    </div>
  )
  
  
  return (
    <div className='channel__container'>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />}
      >
        <ChannelInner setisEditing={setisEditing}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer
