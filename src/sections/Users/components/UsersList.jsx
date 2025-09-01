import { useEffect, useState } from "react"
function UsersList() {
    const [usersList, setUsersList ] = useState([])

     useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Chrissivert/contact")
      .then(res => res.json())
      .then(data => {
        setUsersList(data)});
  }, []);

  return (
    <section>
      <div className="scroll-container">
        {usersList.length > 0 ? (
          usersList.map((user) => (
            <div key={user.id} style={{backgroundColor:user.favouriteColour}}>
                <img src={user.profileImage} />
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
}

export default UsersList
