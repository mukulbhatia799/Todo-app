import React from 'react'

export default function CompleteByButton({text, setCompleteBy}) {
    return (
        <>
          <button onClick={(e) => {
              setCompleteBy(() => text);
            }} className={`border-4 rounded-xl focus:border-purple-700 focus:bg-gray-700 border-black px-3 bg-white font-bold hover:bg-gray-700 py-1`}>{text}</button>
        </>
      );
}