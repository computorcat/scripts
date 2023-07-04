# thumbail creator - specific to my site
mkdir thumbs
for i in *.png; do convert $i -resize 300x227 thumbs/$i; done