=========================================
index -> mse-engine
=========================================
graph TD
    subgraph playAsync
        direction TB
        PA1[create Manifest] --> PA2[await load data]
        PA2 --> PA3[create EMESystem]
        PA3 --> PA4[create MediaSource]
        PA4 --> PA5[player status setting <br>& EME setting...]
        PA5 --> PA6{has video data?}
        PA6 --> |has video| PA7[create video MediaTrack]
        PA6 --> |no video| PA8[do nothing]
        PA7 --> PA9{has audio data?}
        PA8 --> PA9
        PA9 --> |has audio| PA10[create audio MediaTrack]
        PA9 --> |no audio| PA11[do nothing]
        PA10 --> PA12{has text data?}
        PA11 --> PA12
        PA12 --> |has text| PA13[create text MediaTrack]
        PA12 --> |no text| PA14[do nothing]
        PA13 --> PA15[MediaSource duration handling]
        PA14 --> PA15
        PA15 --> |live streaming|PA16[calculate the live edge <br>& start point]
        PA15 --> PA16[MediaTrack.playAsync]
    end
    A[index.ts] -->B{Fairplay or mp4?}
    B --> |FPS or MP4| C[native-engine.ts <br> 未対応]
    B --> |neither FPS nor MP4| D[mse-engine.ts]
    D --> PA1
    style C stroke-dasharray: 5 5
    style PA15 fill:#ff0000


=========================================
media-track
=========================================

graph TD
    subgraph bufferloop
        direction TB
        BL1{Stop <br>or<br> Has Error?} --> |no| BL2{Operation Queue is empty?}
        BL2 --> |no| BL3[Handle operations]
        BL3 --> BL2
        BL2 --> |yes| BL4[wait representation data]
        BL4 --> BL5{has buffer data?}
        BL5 --> BL6{representation is not ended <br>& is not dynamic}
        BL6 --> |yes| BLX[未調査]
        BL6 --> |no| BL7[calculate current time]
        BL7 --> BL8[get segment by current time]
        BL8 --> BL9[get next segment ID]
        BL9 --> BL10[get segment by the ID above]
    end
    A[playAsync] --> B[bandWidthMonitor Start]
    B --> C[WatchDog Start ]
    C --> D[start buffer loop]
    D --> E{stop watching?}
    E --> |no| F[operation watching <br>& handling]
    F --> E
    D --> BL1
    style BLX fill:#ff0000


graph TD
    subgraph bufferloop
        direction TB
        BL1{Stop <br>or<br> Has Error?} --> |no| BL2{Operation Queue is empty?}
        BL2 --> |no| BL3[Handle operations]
        BL3 --> BL2
        BL2 --> |yes| BL4[wait representation data]
        BL4 --> BL5{has buffer data?}
        BL5 --> BL6{representation is not ended <br>& is not dynamic}
        BL6 --> |yes| BLX[未調査]
        BL6 --> |no| BL7[calculate current time]
        BL7 --> BL8[get segment by current time]
        BL8 --> BL9[get next segment ID]
        BL9 --> BL10[get segment by the ID above]
        BL10 --> BL11[will buffer segment]
        
    end
    A[playAsync] --> B[bandWidthMonitor Start]
    B --> C[WatchDog Start ]
    C --> D[start buffer loop]
    D --> E{stop watching?}
    E --> |no| F[operation watching <br>& handling]
    F --> E
    D --> BL1
    style BLX fill:#ff0000
    style BL11 fill:#ff0000


=========================================
media-track
=========================================