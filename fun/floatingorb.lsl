float x; /* RED VALUE */
float y; /* GREEN VALUE */
float z; /* BLUE VALUE */
float f; /* HEIGHT */
integer a = 0; /* ITERATOR */
integer b = 100;

default
{
    state_entry()
    {
        llInstantMessage(llGetOwner(), "Hello, Avatar!");
    }

    touch_start(integer total_number)
    {
        while (TRUE){
            for (a=0;a<b;a++){
                /* make the colour changing more smooth*/
                x=llSin(a);
                y=llSin(a/1.5);
                z=llSin(a/1.2);
                llSetColor(<x,y,z>,ALL_SIDES);
                llSleep(0.1);
            }
        }
    }
}