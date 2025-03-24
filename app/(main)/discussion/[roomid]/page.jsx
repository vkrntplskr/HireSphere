"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { ExpertsList } from '@/services/Options'
import { UserButton } from '@stackframe/stack'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import RecordRTC from 'recordrtc'
function Discussion() {
    const {roomid} = useParams();
    const DiscussionRoomData = useQuery(api.Discussion.getDiscussion, { id: roomid });
    console.log(DiscussionRoomData);

    const [Expert, setExpert] = useState();
    const [enableMic, setEnableMic] = useState(false);
    const recorder = useRef(null);
    let silenceTimeout;

    useEffect(() => {
      if(DiscussionRoomData){
        const Expert = ExpertsList.find(expert => expert.name === DiscussionRoomData.expertName);
        console.log(Expert);
        setExpert(Expert);
      } 
        
    }, [DiscussionRoomData])
    
    const connectToServer = () => {
      setEnableMic(true);
      if (typeof window !== "undefined" && typeof navigator !== "undefined") {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                // Initialize the recorder with configurations
                recorder.current = new RecordRTC(stream, {
                    type: 'audio',
                    mimeType: 'audio/webm;codecs=pcm',
                    recorderType: RecordRTC.StereoAudioRecorder,
                    timeSlice: 250, // Capture audio in chunks of 250ms
                    desiredSampRate: 16000, // Set sample rate
                    numberOfAudioChannels: 1, // Mono audio
                    bufferSize: 4096,
                    audioBitsPerSecond: 128000,
                    ondataavailable: async (blob) => {
                        //if (!realtimeTranscriber.current) return;
    
                        // Reset the silence detection timer on audio input
                        clearTimeout(silenceTimeout);
    
                        // Convert the audio blob to an ArrayBuffer
                        const buffer = await blob.arrayBuffer();
    
                        // Uncomment to debug audio buffer
                        // console.log(buffer);
    
                        // Restart the silence detection timer (2 seconds timeout)
                        silenceTimeout = setTimeout(() => {
                            console.log('User stopped talking');
                            // Handle user stopped talking (e.g., send final transcript, stop recording)
                        }, 2000);
                    }
                });
    
                // Start recording
                recorder.current.startRecording();
            })
            .catch((err) => console.error("Error accessing microphone:", err));
      }
    }

    const disconnect = (e) => {
        e.preventDefault();
        recorder.current.pauseRecording();
        recorder.current = null;
        setEnableMic(false);
    }

  return (
    <div className="-mt-12">
        <h2 className="text-lg font-bold">{DiscussionRoomData?.optionList}</h2>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
          <div className="h-[60vh] bg-secondary border rounded-4xl
          flex items-center justify-center flex-col relative">
            <img src={Expert?.avatar} alt="Avatar" width={200} height={200} 
            className="rounded-full h-[80px] w-[80px] object-cover animate-pulse"/>
            <h2 className="text-gray-500">{Expert?.name}</h2>
            <div className="p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10">
              <UserButton/>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            {!enableMic ? (
              <Button onClick={connectToServer}>Connect</Button>
            ) : (
              <Button variant="destructive" onClick={disconnect}>Disconnect</Button>
            )}
          </div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-[60vh] bg-secondary border rounded-4xl
            flex items-center justify-center flex-col relative">
              <h2>Chat Section</h2>
          </div>
          <h2 className="text-gray-500 mt-4 text-sm">At the End Automatically saved Interview Feedback</h2>
          </div>
        </div>
    </div>
  )
}

export default Discussion