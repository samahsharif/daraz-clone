import React from 'react'
import { NavLink } from 'react-router-dom'

function Sell() {
    return (
        <>
            <section className='sell-sec bg-white'>
                <div className='container'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <NavLink>
                                    <img src="https://gcp-img.slatic.net/lazada/5822f812-ef66-4c3b-8c09-30ef530c98e8_PK-1188-344.jpg" class="d-block w-100" alt="..." />
                                </NavLink>
                            </div>
                            <div className="carousel-item"><NavLink>
                                <img src="https://gcp-img.slatic.net/lazada/bf9e7c38-6a17-4c5f-a4b1-30ee39624d33_PK-1188-344.jpg" class="d-block w-100" /></NavLink>
                            </div>
                            <div className="carousel-item "><NavLink>
                                <img src="https://gcp-img.slatic.net/lazada/517e3020-6dc8-4723-ace4-62002819035a_PK-1188-344.jpg" class="d-block w-100" /></NavLink>
                            </div>
                            <div className="carousel-item "><NavLink>
                                <img src="https://gcp-img.slatic.net/lazada/253d389d-cd48-4c15-88c2-80be217fd8fc_PK-1188-344.jpg" class="d-block w-100" /></NavLink>
                            </div>
                            <div className="carousel-item "><NavLink>
                                <img src="https://gcp-img.slatic.net/lazada/82539b45-de5b-46bb-b44e-60361ba60f94_PK-1188-344.jpg" class="d-block w-100" /></NavLink>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='mt-3' >
                        <div><NavLink>
                            <img src="https://gcp-img.slatic.net/lazada/650b7e4d-9d00-49a7-8a5d-4c27d94b6db4_PK-1188-393.jpg" class="img-fluid w-100" /></NavLink>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='bg-img'>
                            <iframe src="https://www.youtube.com/embed/-jceis9MlXY?si=iuedJjiAIrae-nlK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='card-img mt-3 d-flex'>
                        <NavLink><img className='img-fluid' src='	https://gcp-img.slatic.net/lazada/80e926ad-354f-4749-8239-07cf645e9971_PK-388-873.jpg'></img></NavLink>
                        <NavLink><img className='img-fluid' src='https://gcp-img.slatic.net/lazada/164e07ef-92b9-4d1c-b82d-5bc8f1795cea_PK-388-873.jpg'></img></NavLink>
                        <NavLink><img className='img-fluid' src='https://gcp-img.slatic.net/lazada/0c259b2e-ab76-4ec6-bf49-9466f3905dc7_PK-388-873.jpg'></img></NavLink>
                    </div>

                    <div id="carouselExampleCaptions" className="carousel slide mt-3" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <NavLink>
                                    <img src="https://gcp-img.slatic.net/lazada/09ffa9b2-3fed-4ec0-bda4-b8d5467e8c58_PK-1188-344.jpg" class="d-block w-100" /></NavLink>

                            </div>
                            <div className="carousel-item">
                                <NavLink>
                                    <img src="https://gcp-img.slatic.net/lazada/18a0368f-9cd1-4ff8-8bc8-dfdf8a70c401_PK-1188-344.jpg" class="d-block w-100" /></NavLink>

                            </div>
                            <div className="carousel-item">
                                <NavLink>
                                    <img src="https://gcp-img.slatic.net/lazada/3191fd15-fec3-4e3c-94fe-1d1965211447_PK-1188-344.jpg" class="d-block w-100" /></NavLink>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className=' sell-center mt-3'>
                        <h3>How do I open my shop on daraz</h3>
                        <p>To resgister as a seller,SMS "DARAZ" space "Name" to 7575 now! You can also view a detailed tutorial on Daraz seller <NavLink className="nav-link"><b>sign up</b></NavLink></p>
                        <h3>What categories can I sell on Daraz?</h3>
                        <p>Daraz has over 30 main categories of goods that you can sell products in, including fashion, electronics, FMCG. lifestyle, health & beauty to name a few. however, we do have items that are counterfeilt, dangerous and prohibited by law or cultural norms which sellers must refrain from listing.<NavLink className="nav-link"><b>View here</b></NavLink> </p>
                        <h3>How does Daraz Seller Center work?</h3>
                        <p>Daraz Seller Center is a platform made specifically for Daraz Sellers where you can receive orders and sell across Pakistan by registering your products and uploading them on Daraz's online marketplace from where you receive the payment.<NavLink className="nav-link"><b>click here.</b></NavLink></p>
                        <h3>What is Daraz commission?</h3>
                        <p>Opening a shop on daraz is completely free.However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>
                        <h3>What documents do I require to sell on Daraz?</h3>
                        <ul className='p-0'>
                            <li>Before you sign up, make sure you're ready with the following:</li>
                            <li>Business email address & phone number.</li>
                            <li>ID info (National) ID for indivdual sellers, Business Registration document for corporate sellers.</li>
                            <li>A bank cheque copy with same ittle as ID information as Daraz will be sending payments.</li>
                        </ul>
                        <h3>How can I upload my product on Daraz?</h3>
                        <p>Log in to your Daraz Seller Center account and from the hompage, click on "products" then select "Add products".Enter all details of your products and descripition that need to be added and enter"Submit" on the bottom of the page and your product will be uploaded!<NavLink className="nav-link"><b>Click here</b></NavLink> for a complete guide on product guide on product listing.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell