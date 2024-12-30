import React, { useState } from 'react';
import axios from 'axios';
import EmojiPicker from 'emoji-picker-react';
import storyservice from '../services/storyservice';

// interface EmojiStory {
//     id: string;
//     emojiSequence: string[];
//     translation: string;
//     authorNickname: string;
//     likes: number;
//     createdAt: Date;
//    }
   
//    interface Translation {
//     storyId: string;
//     translation: string;
//     votes: number;
//    }
   
//    // Translation rules example
//    interface TranslationRule {
//     pattern: string[];
//     templates: string[];
//    }

const StoryTeller = () =>{


    const [inputStr, setInputStr] = useState(""); 
    const [showPicker, setShowPicker] = useState(true);   
    
    const onEmojiClick = (event, emojiObject) => {
        console.log("emojiObject",emojiObject)
        setInputStr((prevInput) => prevInput + emojiObject.emoji);
        console.log("inputStr",inputStr);
      };


      const SendEmoji = () =>{
        setShowPicker(false);
        console.log("clicked");
        storyservice.Create().then((res) =>{     
            
            console.log(res);
        })
      }

    return(
<div>
      <h1>StoryTeller App</h1>
      <input 
        type="text" 
        value={inputStr} 
        onChange={(e) => setInputStr(e.target.value)} 
        placeholder="Start typing your story..." 
      />
       <button onClick={SendEmoji}>
       Send
      </button>
      {showPicker && (
        <EmojiPicker 
          onEmojiClick={onEmojiClick} 
          emojiStyle="native" // Optional: Customize the emoji style
        />
      )}
    </div>
    )


}

export default StoryTeller;