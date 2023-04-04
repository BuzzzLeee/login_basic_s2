let dbUsers = 
[
    {
        Username : "Bazli",
        Password : "bazli35",
        name : "bazli",
        email : "bazlinazri35@gmail.com"
    },

    {
        Username : "Ali",
        Password : "1234",
        name : "ALi",
        email : "ali@gmail.com"
    },

    {
        Username : "abu",
        Password : "12345",
        name : "Abut",
        email : "abu88@gmail.com"
    }
]

function login(reqUsername, reqPassword)
{
    let matchuser = dbUsers.find(
        x => x.Username == reqUsername)

        if(!matchuser)return "User not found !"
        if (matchuser.Password == reqPassword)
        {
            return matchuser
        }
        else
        {
            return "Invalid password"
        }
    //console.log(matchuser)
}

//try to log in
console.log(login ("Bazli","bazli35"))

function register(reqUsername, reqPassword, reqName, reqEmail)
{
    dbUsers.push
    (
        {
            Username: reqUsername,
            Password: reqPassword,
            name: reqName,
            email: reqEmail
        }
    )
}

register("BOSSKU", "bossku123", "Malu Apa Bossku", "bossku35@gmail.com")
console.log(login("BOSSKU", "bossku123"))