import { useState } from "react"

export default function App () {
    const[formData, setFormData]= useState(
        {
            email: "",
            password:"",
            confirmPassword:"",
            okayToEmail: false
        }
    )
    function handleChange(event){
        const {name, value, type, checked} = event.target
        return(
            setFormData(prevFormData =>{
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value

                }
            })
        )
    }
    function handleSubmit(event){
        const {value} = event.target
        const messageSuccess = "Successfully signed up"
        const messageFailed = "passwords do not match"
        event.preventDefault()
       
        let message = formData.password === formData.confirmPassword ? messageSuccess : messageFailed 
        console.log(message)

        formData.okayToEmail && console.log("Thanks for signing up for our newsletter!")
   
        
    }
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form--input"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                />
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                        name="okayToEmail"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}