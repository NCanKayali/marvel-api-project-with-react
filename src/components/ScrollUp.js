//? Added custom button for scroll to top of page.
import ScrollToTop from 'react-scroll-up';

function ScrollUp() {

    return (

        <ScrollToTop style={{width: "50px", height: "40px", borderRadius: "7px", background: "grey", display: "inline-flex", justifyContent: "center", alignItems: "center", color:"white" }} showUnder={160}>
            <span >↑</span>
        </ScrollToTop>

    )
}

export default ScrollUp