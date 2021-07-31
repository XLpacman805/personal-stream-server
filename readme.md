# Personal Stream Server - NodeJS #

## Purpose ##

I want to be able to view a video input from my computer in VRChat movie world. VRChat live stream players supports HTTP Live Streaming (HLS) protocol. The idea is to use OBS for video encoding and stream segmenting into a .m3u8 playlist filed, and multiple .ts files and this node app to serve these files to the video player client. 

![Image of HLS Architecture](https://docs-assets.developer.apple.com/published/88e87744a3/de18e941-81de-482f-843d-834a4dd3aa71.png)