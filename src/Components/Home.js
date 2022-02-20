import React from 'react';
import './Home.css'


import HeadImg from '../Components/Imgs/logo.svg'
import HeadImgb from '../Components/Imgs/logob.svg'
import Car1 from './Imgs/carA.svg'
import CarH from './Imgs/CarH.svg'
import Bird from './Imgs/bird.svg'
import Navlogo from './Imgs/mlgo.svg'
import Car2 from './Imgs/CarB.png'
import AllCar from './Imgs/Allcars.png'
import Gif from './Imgs/Gif.gif'
import Ta from './Imgs/T1.jpeg'
import Tb from './Imgs/T2.jpeg'
import Tc from './Imgs/T3.jpeg'
import Td from './Imgs/T4.jpeg'
import Te from './Imgs/T5.jpeg'
import Tf from './Imgs/T6.jpeg'


export default function Home() {
    return (
        <div className='Sara'>
            <div className='container-fluid home ' >
                <div className=' pt-4'>
                    <div className='container  mb-3 '>
                        <div className='row'>
                            <div className='col-md-4'>

                                <nav className="navbar nnn  mt-3 fixed-top navbgo  container navbar-expand-lg navbar-dark navv">


                                    {/* <a class="navbar-brand d-block d-md-none" href="#"><h4 class="">CYCC</h4></a> */}

                                    <a class="navbar-brand" href="#">
                                        <img src={Navlogo} width="100" height="100%" alt=""></img>
                                    </a>


                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="mob-navbar">
                                        <ul class="navbar-nav   ">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#About">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#Sp">Space</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#Rd">Road Map</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#Team">Team</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#Faq">FAQ</a>
                                            </li>
                                            <button type="button" class="Navbtn btn   px-5 ">Connect</button>

                                        </ul>

                                    </div>

                                </nav>

                            </div>

                        </div>
                    </div>

                    <div className=' container imgb' >
                        <div className=' d-flex flex-column justify-content-end' >
                            <div className='text-center  '>

                                <div class="cardA">
                                    <img src={HeadImg} alt="Card Back"></img>
                                    <img src={HeadImgb} class="img-top" alt="Card Front"></img>
                                </div>

                            </div>
                            <div className='text-center  '>
                                <br></br>
                                <a id='About'></a>
                                <button type="button" class="Wbtn btn mb-5 btn-lg px-5 ">MINT (SOON)</button>
                                <p className='text-white pb-5 h1'>14,165 NFTs - 0.0399 ETH - 22/02/2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-center AboutUs container-fluid py-5'>
                <div className='container'>
                    <h1 className='display-3'>ABOUT YU</h1>
                    <p className=''>
                        The Crazy Yugo Car Club (CYCC) is a generative NFT Art collection based on the iconic Yugo. Once known as the “worst car in history”, it is now being reintroduced with a "crazy" new look. CYCC is the first “avatar-ized” car illustration in the NFT space. Its design has been artistically curated in order to have unique and desirable NFTs that are randomly generated.<br></br> <br></br>

                        Its tokens give you access to a unique and "crazy" community. The CYCC membership costs the same for everyone, but the car you could mint is alway different. This project is the first of many to come and was created by Helix Labs, a Swiss-based LLC company, focused on exploring the web3 frontier. Welcome to the Yugo revolution - fasten your seat belt, we are ready to take-off.                    </p>
                    <div class="cardd">
                        <img src={Car1} alt="Card Back"></img>
                        <img src={CarH} class="img-top" alt="Card Front"></img>
                    </div>
                </div>
            </div>


            <div className='conatiner-fluid TheYogo'>


                <div className='container '>
                    <div className='row  '>
                        <div className='col-12 col-md-6 py-5'>
                            <div class="container fieldset ">
                                <h4 class="legendA">THE YUGO</h4>
                                <p className='LT'>To be clear: The Yugo is not just a car. The Yugo is THE Car. It was the byproduct of a failed communist experiment called Yugoslavia. Marshall Tito’s dream was to build a luxurious and timeless car brand that would last for generations to come.That dream was on the path of realisation in the late '80s when "Yugomania" landed in US
                                    A remarkable 141,651 cars were sold in total with the tagline “Everybody needs a Yugo sometime”. It hit the market with only $3,990.

                                    It was the byproduct of a failed communist experiment called Yugoslavia. Yugo is what happens when you mix communism and capitalism in the same dish - it turns sour. Despite its commercial failure the Yugo achieved cult status and became a pop culture icon..
                                    "Buy yourself some Freedom, buy a Yugo"..</p>
                            </div>
                        </div>

                        <div className='col-12 col-md-6 py-5'>
                            <div class="container fieldset">
                                <h4 class="legendB">THE crazy YUGO</h4>
                                <p className=''>The Crazy Yugo is an artistic expression of the Yugo GV (Good Value) Model, with a twist in the story. We are not here to rewrite Yugo’s history. CYCC wants to bring the worst of the past and transform it into something special and cool. The illustration wants to give value to its classic car design, but also add some craziness. As , there will be only 14,165 unique and randomly generated Crazy Yugo car illustrations. Purchasing a Crazy Yugo costs 0.0399 ETH.
                                    ‍
                                    CYCC is a unique digital collection living on the Ethereum blockchain and based on the ERC-721A contract. When driving a Yugo we want you to spend on your gas fees wisely (you can mint more NFTs at the same price of one). Enjoy this bumpy ride with us. Stay Crazy, Hodl Yugo.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



            <div className='YUGOQ text-center'>
                <img className='CarA mb-5 w-100' src={AllCar} ></img>

                <div className='container'>
                    <h1 className='pt-5 display-2 '>YUGO QUOTES</h1>
                    <p className='display-4 pb-5 TYG' >what people say about Yugo</p>
                    <p className='pb-4 h3'>“A dull little car built in communist Yugoslavia, the Yugo was a hit—no, a mania,<br /> something the Associated Press called a “Yugomania.”<br />
                        Jason Vuic, <span className='text-muted'>Writer and Historian, Author of “The Yugo. Rise and Fall of the Worst<br /> Car in History” </span></p>

                    <p className='h3 pb-4'>
                        "Yugo is the Mona Lisa of bad cars"<br />
                        Dan Neil, Pulitzer <span className='text-muted'>Prize-winning automotive critic and syndicated columnist for the <br /> Los Angeles Times</span>
                    </p>

                    <p className='h3 pb-4'>
                        "I once test drove a Yugo, during which the radio fell out, the gear shift knob <br /> came off in my hand, and I saw daylight through the strip around the <br /> windshield." <br />
                        - An ex-Yugo-driver
                        <a id='Sp'></a>
                    </p>

                    <p className='h3 pb-4'>
                        "Buy Yourself some Freedom, Buy a Yugo"* <br />
                        - Yugo America Advertisement<br />
                    </p>

                    <p className='h3 mb-0 pb-4 pb-5 text-white'>
                        *This is not financial advice
                    </p>
                </div>
            </div>





            <div className='container-fluid rarity ' >
                <h1 className='display-3 text-white text-center pb-2 pt-5' >YUGO rarity</h1>

                <div className='container b'>


                    <div className='row mx-2 bb' >
                        <div className='col-12 col-md-4 thing py-3 ' >

                            <div className=' w-100 heading ' >
                                <img className="d-block w-100  " src={Gif} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >Classic</h3>
                            </div>

                        </div>

                        <div className='col-12 col-md-4 py-3 thing' >

                            <div className=' w-100 heading' >
                                <img className="d-block w-100 " src={Gif} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >crazy</h3>
                            </div>

                        </div>

                        <div className='col-12 col-md-4 py-3 thing' >

                            <div className=' w-100 heading' >
                                <img className="d-block w-100 " src={Gif} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >SUPER CRAZY    </h3>
                                <a id='Rd'></a>
                            </div>

                        </div>

                    </div>
                </div>
                <p className='text-center py-5 mb-0 pb-5'>All Yugos are randomly generated based on 200 different hand-drawn traits. All Yugos are dope, but some are more rare than others. The price for a Yugo is always the same: 0.0399 ETH (“39-90”). Fortuna caeca est (From Latin "Luck is blind").</p>

            </div>


            <div className='ROADMAP text-center'>

                <div className='container-fluid'>
                    <div className='container'>
                        {/* <img className='w-100 ' src={Bird} ></img> */}
                        <h1 className='pt-5 display-4'>NOT-A-ROADMAP</h1>
                        <p className='display-4 pb-5 TYG' >THE YUGO JOURNEY</p>
                        <p>The Yugo Journey gives no false promises. Our first mission is to build cool, crazy and unique NFT Art collection. The long term vision is to form one of the coolest and craziest communities around the Web3. Therefore, CYCC vision is as follows: </p>

                        <p>
                            <span className='text-danger'>"Cool Art -</span> In nowadays NFT marketplaces is really hard to stand out of the crowd. We focused lots of our attention to the  design details. We want to be original, unique and cool.

                        </p>

                        <p>
                        <span className='text-danger'>Community -</span> We believe that Web3 communities and DAOs are built bottom-up. That's why it's important to give value and ownership from the start. One should Ape-in only if the art and team are good. Community will follow.
                        </p>

                        <p>
                        <span className='text-danger'>Long-term commitment - </span>This is the first of many experiments at Helix Labs. The next big experiment related to CYCC will be the constitution of a DAO (Yugo DAO), where the Yugo Hodlers will have a voice in future Helix Labs developments.
                        </p>
                    </div>

                </div>
                <img className='w-100 ' src={Car2} ></img>

            </div>

            <a id='Team'></a>

            <div className='container-fluid Team'>
                <div className='container text-center'>
                    <h1 className='pt-5 display-3'>THE NON-FUNGIBLE TEAM</h1>
                    <p className='TD my-5'>The Yugo project started as a one-man band. Nema (and his alter egos) thought that he could be the builder and the seller. Regardless his experience in Coding, Data, Finance, and lately Graphics Illustrations, he could not manage it all by himself. Here is the Non-Fungible team that made this bumpy Yugo journey possible.</p>

                    <div className='row mx-2 ' >
                        <div className='bg-white IB col-12 col-md-4 thing my-5 ' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">NEMA</h4>
                                <img className="d-block w-100 IB  " src={Ta} alt="First slide"></img>
                                <h3 className='text-white text-center h3 pt-3' >The Artisan</h3>
                                <p className='h5'>Helix Labs GmbH Founder,<br />
                                    Ex-banker, Ex-baller, Ex-Yugoslavian, Failed in everything, Antifragile, First-time Artist, “I secretly always wanted to be an artist, but along the way I've found money”</p>
                                <a href='https://twitter.com/nemastoja'> <i class="fab fa-twitter text-center Ico"></i></a>
                            </div>

                        </div>

                        <div className='bg-white IB col-12 col-md-4 my-5 thing' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">Tito</h4>

                                <img className="d-block w-100 IB " src={Tb} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >The Founder</h3>
                                <p className='h5'>Supreme Yugo Leader, Uncharismatic (Fictional Character, Alter-ego). Please do not get offended by his cameradery and ego, “I am here to centralize this web3 to my own wallet” (with strong slavic accent)</p>
                                <a href='https://twitter.com/MarshalBrozTito'><i class="fab fa-twitter text-center Ico"></i></a>

                            </div>

                        </div>

                        <div className='bg-white IB col-12 col-md-4 my-5 thing' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">NAKAMOTOVICH</h4>

                                <img className="d-block w-100 IB " src={Tc} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >The Developer</h3>
                                <p className='h5'>Professional Copy-paster, Solidity Developer (he says), Do not disturb, Lazy AF. Might be 1 to n people. Anon alien. Often says: “Hello, have you tried turning it off and on again?”</p>
                                <a href='https://twitter.com/nakamotovich'><i class="fab fa-twitter text-center Ico"></i></a>

                            </div>

                        </div>

                    </div>


                    <div className='row mx-2 py-4' >
                        <div className='bg-white IB  col-12 col-md-4 thing my-5 ' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">ALICE IN YUGOLAND</h4>

                                <img className="d-block w-100 IB " src={Td} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >The Web Designer</h3>
                                <p className='h5'>Right-click-Save JPEGer, Love Flofers, Love Colors. She might have an affair with one of the founders, “I am the only woman in the team, but I drive better cars”</p>
                                <a href='https://twitter.com/AYugoland'><i class="fab fa-twitter text-center Ico" ></i></a>
                            </div>

                        </div>

                        <div className='bg-white IB col-12 col-md-4 my-5 thing' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">KEVIN</h4>

                                <img className="d-block w-100 IB " src={Te} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >The Art Advisor</h3>
                                <p className='h5'>Swiss Cinemotagrapher, Film director, Producer, Crypto Passionate, Finding his way out of the the Rabbit Hole, “Does Nema really sees me as Jesus?”</p>
                                <a href='https://www.imdb.com/name/nm2011575/'><button type="button" class="kbtn text-white btn btn-sm mb-2  mr-2 px-2 ">IMDB</button></a>

                                <a href='https://twitter.com/kevinme95894939'><i class="fab fa-twitter text-center Ico"></i></a>

                            </div>

                        </div>

                        <div className='bg-white IB col-12 col-md-4 my-5 thing' >

                            <div className=' w-100  ' >
                                <h4 class="legendTeam ">BAZZ JONES</h4>

                                <img className="d-block w-100 IB " src={Tf} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >The Content Manager</h3>
                                <p  className='h5'>Art Director, Marketing Guru, Graphic designer, Italian ex-American football player, Old School Street Artist, “I am here for the Vibes”</p>
                                <a href='https://twitter.com/thebazzjones'><i class="fab fa-twitter text-center Ico"></i></a>
                                <a id='Faq'></a>

                            </div>

                        </div>

                    </div>




                </div>

            </div>

            <div className='container-fluid faq'>
                <div class="container-fluid">
                    <div class="row py-5">
                        <div class="col-lg-9 mx-auto text-white text-center">
                            <h1 className='pt-5 display-3'>FAQ (YU)</h1>
                            <p className='h1 pb-5 TYG' >FREQUENTLY ASKED QUESTIONS </p>

                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-9 mx-auto">
                            <div id="accordionExample" class="accordion shadow">

                                <div class="card ">
                                    <div id="headingOne" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="d-block position-relative text-dark text-uppercase collapsible-link py-2">WHAT IS THE TOTAL SUPPLY?</a></h6>
                                    </div>
                                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" class="collapse show">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">There are <span className='text-danger'>14,165</span> uniquely generated Yugos. Each costs <span className='text-primary'> ETH 0.0399 </span> to mint. Those numbers are mirroring the Yugomania experience in US. <span className='text-danger'>141,651</span> where sold in total, for the price of<span className='text-primary'> $3,990 each </span></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div id="headingTwo" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">WHEN WILL CRAZY YUGO LAUNCH?</a></h6>
                                    </div>
                                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">CYCC is launching on the <span className='text-danger'> 22/02/2022</span> at <span className='text-primary'> 20:22</span>(CET) -<span className='text-primary'> 02:22pm</span>(EST).

                                                In case you were wondering. Yes, we are obsessed with numbers and symbolisms.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div id="headingThree" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">HOW TO MINT A CRAZY YUGO NFT?</a></h6>
                                    </div>
                                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">If you are new to NFTs, this is the first main steps to follow:

                                                Download the<a className='text-danger' href='https://metamask.io/'> metamask.io </a>extension for the Chrome/Brave browser or app on mobile. This will allow you to make purchases with Ethereum and can be found in the extensions tab.

                                                You can purchase Ethereum through the Metamask Wallet using Wyre or Send Ethereum from an exchange (Coinbase, Binance, or others).

                                                Click on Connect at the top of the page and connect your Metamask. Once joined, you will be able to purchase the NFTs in the mint section. You will be prompted to sign your transaction.

                                                Bear in mind that gas fees are associated to each NFT transaction. At CYCC we are using ERC721A standards, therefore you would pay the same gas fee even for multiple NFT purchases. Once you have made your purchase, your Yugo NFTs will be viewable in your wallet and on <a className='text-danger' href='https://opensea.io/collection/crazyyugocarclub'> Opensea.</a></p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card">
                                    <div id="headingFour" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">WHAT ARE THE IP IN PLACE?</a></h6>
                                    </div>
                                    <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">YUGO has all of his <span className='text-success'>Trademarks</span> expired. It's brand name and car manufacturer has bankrupted (Zastava Automobiles, subsidiary of Group Zastava Vehicles).

                                                CYCC is a derivative (degenerative art) illustration of Yugo. It is a parody which bring an artistic interpretation of "the worst car in history". Therefore, even without any copyrights in place, CYCC acts in accordance to "Fair Use" principles.

                                                The CYCC Art collection is of Public Domain (<span className='text-success'>CC0</span>). It is the single NFT holder that gets the rights</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div id="headingFive" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">HOW TO BE PART OF THE CLUB?</a></h6>
                                    </div>
                                    <div id="collapseFive" aria-labelledby="headingFour" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">Participation to the club and CYCC community is only possible with the token. Each Crazy Yugo Costs the same (only 0.0399 ETH). With that membership access, you can unlock endless future opportunities that are aligned with Helix Labs.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card">
                                    <div id="headingSix" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">WHAT IS HELIX LABS?</a></h6>
                                    </div>
                                    <div id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">Helix Labs GmbH is a registered LLC company based in Zurich, Switzerland. CYCC is its first baby and so the launching pad for  creating, building and developing many other NFT and Web3 related projects.

                                                Helix represents a twisted and curved shape that is often related  to the DNA form (double helices): like DNA is the genetic heritage of many living organisms, CYCC is the DNA of Helix Labs.

                                                The spirit of experimentation, decentralisation and composability is locked in "Labs".</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card">
                                    <div id="headingS" class="card-header bg-white shadow-sm border-0">
                                        <h6 class="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseS" aria-expanded="false" aria-controls="collapseS" class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">HOW WAS THE YUGO PROJECT BORN?</a></h6>
                                    </div>
                                    <div id="collapseS" aria-labelledby="headingS" data-parent="#accordionExample" class="collapse">
                                        <div class="card-body p-5">
                                            <p class="font-weight-light m-0">We took inspiration from the degenerative NFT Art revolution in 2020. We were impressed by the design and concept of the Bored Apes (BAYC) so we initially wanted to design a car the Apes. The Web design was inspired by another interesting NFT project, Robots. KUDOs also to Azuki who developed the ERC721A smart contract for NFT minting.

                                                Yugo started as a fun experiment, but it's the project that launched Helix Labs. We strongly believe that Web3 is the place to be. In order to get there we want to dirt our hands in core processes, and hopefully one day be part of some larger and more impactful projects in Web3. As a Yugo hodler, you will have the chance to participate with us in this journey.

                                                Worth mentioning, as source of inspiration, are also Naval Ravikant, Nick Dixon, and the Bankless nation. If you wanna jump in the same rabbit hole, this is a good starting point.</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid bg-dark'>
                <div className='container bg-dark'>
                    <div className='row lr'>
                        <div className='col-12 col-md-4 pt-5 mt-3 '>
                            <span className=' h2 fl pt-3 text-white '>© 2022 Helix Labs GmbH</span>

                        </div>

                        <div className='col-12 col-md-4 pt-5 text-center'>
                            <i class="  fas fa-hand-spock if p-2"></i>
                            <i className="fab fa-discord   if p-2"></i>
                            <i className="   fab fa-twitter if p-2"></i>
                            <i className="   fab fa-instagram p-2 if"></i>
                        </div>

                        <div className='col-12 col-md-4'>
                            <button type="button" class="Fbtn btn mb-5 btn-lg px-5 ">MINT (SOON)</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='container-fluid bg-dark'>
                <div className='  py-2 text-white  ' >
                        <div className='row'>
                            <div className='col-4'>
                            <div className='text-center'>
                                <span className='pt-5 Footer'>© 2022 Helix Labs GmbH</span>
                                </div>
                                <div className='col-4'>
                                <i class=" px-1 fas fa-hand-spock"></i>
                                <i className="fab fa-discord  px-1"></i>
                                <i className=" px-1  fab fa-twitter"></i>
                                </div>

                                <div className='col-4'>

                                </div>
                            </div>
                        </div>

                 

                </div>
            </div> */}

        </div>);
}
