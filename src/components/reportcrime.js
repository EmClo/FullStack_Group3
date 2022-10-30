function ReportCrime() {
return (
    <div class='mapbackground'>
        <h1> Please let us know if there is anything you would like to report about crime in your area or any other queries</h1>
        <form >
            <ul class='inputboxes'>
            <li>
                <input className="inputtextarea" type='text' name='user_name' placeholder="First Name" />
            </li>
            <li>
                <input className="inputtextarea" type='text' name='user_last_name' placeholder="Last Name" />
            </li>
            <li>
                <input className="inputtextarea" type='email' name="user_email" placeholder="Your Email" />
            </li>
            </ul>
            <div class='inputboxesmessage'>
                <textarea className="inputtextarea" name='user_message' placeholder="Your Message..." />
            </div>
            <div>
                <button class= 'clickbutton' type='submit'>Send Message</button>
            </div>
        </form>
    </div>
)
}

export default ReportCrime;