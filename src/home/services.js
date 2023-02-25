import React from "react";
import './home.css';
import image2 from '../home/styleTheme/images/services/service-2.png';
import image1 from '../home/styleTheme/images/services/service-1.png';
import image3 from '../home/styleTheme/images/services/service-3.png';

export const Services = () => {
  return (
    <>
      <section id="services" class="services">
        <div class="container">
          <div class="row text-center">
            <h1 class="display-3 fw-bold">Capable Of</h1>
            <div class="heading-line mb-1"></div>
          </div>
          <div class="row pt-2 pb-2 mt-0 mb-3">
            <div class="col-md-6 border-right">
              <div class="bg-white p-3">
                <h2 class="fw-bold text-capitalize text-center">
                  Capable Of Building Applications Ranging From Initial Design To Deployment Anywhere Anytime
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="bg-white p-4 text-start">
                <p class="fw-light">
                  Get progressive software development lifecycle with me.
                  I develop robust, scalable and secured web and mobile applications to level up your business needs.
                  Share your ideas, take your business a success flight!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div class="services__content">
                <div class="icon d-block fas fa-paper-plane"></div>
                <h3 class="display-3--title mt-1">Data Analysis</h3>
                <p class="lh-lg">
                  Improve the use of data insights in decision-making. Imagine having complete visibility of the data lifecycle from ingestion to consumption which would simplify your data operations, with intelligence.
                </p>
                {/* <button type="button" class="rounded-pill btn-rounded border-primary">Learn more
            <span><i class="fas fa-arrow-right"></i></span>
          </button> */}
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div class="services__pic">
                <img src={image1} alt="marketing illustration" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
              <div class="services__pic">
                <img src={image2} alt="web development illustration" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div class="services__content">
                <div class="icon d-block fas fa-code"></div>
                <h3 class="display-3--title mt-1">Web development</h3>
                <p class="lh-lg">
                  Client-focused, customer-centric, creating website solutions that deliver
                  tangible business results, I help brands the
                  ever-changing digital landscape.
                </p>
                {/* <button type="button" class="rounded-pill btn-rounded border-primary">Learn more
            <span><i class="fas fa-arrow-right"></i></span>
          </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}