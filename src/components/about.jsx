import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="color-lib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effects="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>Skilled software engineer experienced in developing full-stack Javascript applications emphasizing a modularized React front end. Focusing on engineering empathy along with designing better user experiences through emphatic and progressive thinking.</p>
                      <p> Living a double life away from coding as a competitive kick boxer, and an at home chef for friends and family.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-mid-offset-3 col-md-pull-3 animate-box" data-animate-effects="fadeInLeft"></div>
              <span className="heading-meta">What Do I Do?</span>
              <h2 className="colorlib-heading"> Here are some of my expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Web Development</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minima, blanditiis natus alias quibu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}