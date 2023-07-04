# take input of a comma seperated list of card names
# split the list, every element is a card name
# download the image of the card, https://colors-tcg.eu/cards/cardname.gif
#if the card is not found, print card not found and continue
# if the card is found, download the image and save it in the current directory

# ask for input
echo "Enter a comma seperated list of card names: "
read input
IFS=',' read -r -a cards <<< "$input"
for card in "${cards[@]}"
do
    wget -q "https://colors-tcg.eu/cards/$card.gif"
    if [ $? -eq 0 ]
    then
        echo "Card $card found"
    else
        echo "Card $card not found"
    fi
done
