import React, { useEffect, useState } from "react"
import { getUsers } from "../utils/petitions"
import { UserCard } from "./userCard"

function UserList() {

  const [list, setList] = useState([])

  useEffect(() => {

    getUsers()
      .then((response) => {
        // console.log(response)
        setList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {
        list.map((user, index) => (

          <div className="productCard" key={index}>
            <UserCard
              user={user}
            />
          </div>

        ))
      }
    </div>
  )
}

export { UserList }