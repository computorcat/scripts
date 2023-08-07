import os
import subprocess

audio_type = input("Enter the audio data type (eg. \"mp3\", \"wav\", \"ogg\"): ")
image_filename = input("Enter the album art file name (eg. image.jpg): ")

for audio_file in os.listdir():
    if audio_file.endswith('.' + audio_type):
        output_filename = os.path.splitext(audio_file)[0] + '.mp4'
        cmd = [
            'ffmpeg',
            '-loop', '1', '-i', image_filename,
            '-i', audio_file,
            '-c:a', 'copy', '-c:v', 'libx264', '-vf', 'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1',
            '-shortest', output_filename
        ]
        subprocess.run(cmd)

print("Conversion completed.")



