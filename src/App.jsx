import React, { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

// react toastify import
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  // Warning toast easily handle with function
  const showToast = (message, type = 'warn') => {
    toast[type](message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
      style: { color: "#000" },
    });
  };

  // Success toast easily handle with function
  const showSuccessToast = (message, type = 'success') => {
    toast[type](message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
      style: { color: "#000" },
    });
  };

  // Claim Free Credit state
  const [freeCredit, setFreeCredit] = useState(0)
  // available and selected button toggle case state
  const [toggleBtn, setToggleBtn] = useState("available")
  // select players state
  const [selectPlayer, setSelectPlayer] = useState([])
  // selected players info state
  const [selectedPlayerInfo, setSelectedPlayerInfo] = useState([])

  // increase credit value when button clicked
  const handleClaimCredit = () => {
    setFreeCredit(freeCredit + 10000000)
  }
  // handle toggle button with active when each button is clicked
  const handleToggleBtn = (status) => {
    setToggleBtn(status)
  }

  // handle selected player when choose player button is clicked
  const handleSelectPlayers = (player) => {

    // check the player is available in selected list or not
    const isPlayerAlreadySelected = selectPlayer.some(selectedPlayer => selectedPlayer.id === player.id);

    if (isPlayerAlreadySelected) {
      showToast("Player is already selected!")
      return
    }

    // check the amount for beating
    if (freeCredit < player.beating_price) {
      return showToast("Opps! You haven't enough money ")

    }

    // max player 6 for beating
    if (selectPlayer.length >= 6) {
      return showToast("You can't added more than 6 players")

    }

    setSelectPlayer([...selectPlayer, player])

    // decrease the amount when any player choose
    setFreeCredit(freeCredit - player.beating_price)

    // set the data into another sate to control
    setSelectedPlayerInfo([...selectedPlayerInfo, player])

  }

  // handle delete button when is clicked
  const handleDeleteBtn = (deletePlayer) => {
    // find the player that we need to remove
    // const removePlayer = selectedPlayerInfo.find((remove) => remove.id === deletePlayer.id);

    showSuccessToast("Player removed from selected list")

    // update player list into selected fields
    const updatePlayer = selectedPlayerInfo.filter((update) => update.id !== deletePlayer.id);
    setSelectPlayer(updatePlayer)
    setSelectedPlayerInfo(updatePlayer)
    // it's add just for optional/learning purpose
    setFreeCredit(freeCredit + deletePlayer.beating_price)

  }



  return (
    <>

      <Header

        freeCredit={freeCredit}
      ></Header>
      <Hero

        handleClaimCredit={handleClaimCredit}
      ></Hero>
      <Main
        toggleBtn={toggleBtn}
        handleToggleBtn={handleToggleBtn}
        selectPlayer={selectPlayer}
        handleSelectPlayers={handleSelectPlayers}
        selectedPlayerInfo={selectedPlayerInfo}
        handleDeleteBtn={handleDeleteBtn} 


      ></Main>

      <Footer ></Footer>


      {/* react toastify container */}


      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition:Bounce
      />




    </>
  )
}

export default App
