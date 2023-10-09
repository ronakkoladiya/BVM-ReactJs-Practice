import  { useEffect } from "react";

function useTitleCounter(count) {
    useEffect(() => {

        if(count > 0){
            document.title = `Practice 💌(${count})`;
        }
        else{
            document.title = 'Practice';
        }

    }, [count]);
}

export default useTitleCounter;
