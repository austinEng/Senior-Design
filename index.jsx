import React, { Fragment } from 'react';
import Flexbox from 'react-svg-flexbox';
import { render } from 'react-dom';
import './main.css';

const timelineTextStyle = {
  dominantBaseline: 'central',
  fill: '#fff',
  fontFamily: 'Open Sans',
  textAnchor: 'middle',
  fontSize: 30,
};

class TimelineEvent extends React.Component {
  render() {
    const {x, y, fill, width, height, children} = this.props;
    return (
      <g transform={`translate(${x} ${y})`}>
        <rect fill={fill} width={width} height={height} />
        <text x={width / 2} y={height/2} style={timelineTextStyle}>{children}</text>
      </g>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <Fragment>
          <div className="container container-col" id="header">
              <div className="column header-side" id="title-left">
                  The University of Pennsylvania <br />
                  Department of Computer Science <br />
                  CIS 400/401 Senior Design 2017 &ndash; 2018
              </div>
              <div className="column" id="title">
                  <h1>Exploring High Performance Graphics <br />with Modern Web Technology</h1>
              </div>
              <div className="column header-side" id="title-right">
                  Austin Eng (aen@seas.upenn.edu)<br />
                  Advisor: Patrick Cozzi (pjcozzi@gmail.com) <br/ >
                  Group #12
              </div>
          </div>
          <div className="container container-col">
              <div className="column" style={{width: '25%', borderRight: '1px solid #ccc'}}>
                  <div className="container container-row">
                      <section className="row">
                          <h2>Objective</h2>
                          <div className="content">
                              <p>Create a high-performance graphics application using modern web technologies to demonstrate the viability of the web as a platform capable of computationally intensive applications.</p>
                          </div>
                      </section>
                      <section className="row">
                          <h2>Motivation</h2>
                          <div className="content">
                              <ul>
                                  <li>The web has historically been a low-performance platform used mainly for display and delivery of simple content and media.</li>
                                  <li>The advent of newer web technologies offer the potential for superior <i>near-native performance</i> on an exceptionally <i>accesible</i> and <i>portable</i> platform.</li>
                                  <li>High performance graphics applications are currently limited to desktop and game-console platforms.</li>
                              </ul>
                          </div>
                      </section>
                      <section className="row">
                          <h2>Goals</h2>
                          <div className="content">
                              <ul>
                                  <li>Build a sample application which utilizes WebWorkers and WebAssembly to demonstrate increased computational power on the web.</li>
                                  <li>Understand and investigate best practices and techniques for maximizing framerate in online graphics applications.</li>
                                  <li>Compare and evaluate WebAssembly and JavaScript performance.</li>
                                  <li>Investigate WebWorkers for multiprocess computation and evaluate performance implications.</li>
                              </ul>
                          </div>
                      </section>
                  </div>
              </div>

              <div className="column container container-row" style={{width: '75%', justifyContent: 'center'}}>
                <section className="row">
                  <h2>Implementation</h2>
                  <h3 className="timeline-title">C++ &#8594; LLVM &#8594; WebAssembly</h3>
                  <p>Code is compiled using the Emscripten toolchain. This first compiles code to LLVM with clang, allowing for significant compiler optimizations, before outputing WebAssembly.</p>
                  <div className="timeline-background">
                    <h3 className="timeline-title">WebWorker Process</h3>

                    <div className="column container container-col">
                      <div style={{width: '9%' }} className="column empty"></div>
                      <div className="box">
                        <img style={{width: '4in'}} src={require("./images/pullout_bboxes.png")} />
                        <caption>Tiles visible to camera</caption>
                      </div>
                      <div className="box">
                        <img style={{width: '4in'}} src={require("./images/refine1.png")} />
                        <img style={{width: '4in'}} src={require("./images/refine2.png")} />
                        <img style={{width: '4in'}} src={require("./images/refine3.png")} />
                        <caption>Generate geometry with adaptive refinement</caption>
                      </div>
                    </div>

                    <div className="column timeline container container-col">
                      <div style={{width: '9%' }} className="column empty"></div>
                      <div style={{width: '11%'}} className="column col-cyan">Compute Visible Tiles</div>
                      <div style={{width: '43%'}} className="column col-cyan">Generate Terrain</div>
                      <div style={{width: '5%' }} className="column col-cyan">Serialize Draw Commands</div>
                      <div style={{width: '5%' }} className="column empty"></div>
                      <div style={{width: '10%'}} className="column col-cyan">Compute Visible Tiles</div>
                      <div style={{width: '1%' }} className="column col-cyan">&middot;&middot;&middot;</div>
                    </div>

                    <h3 className="timeline-title">Main Process</h3>
                    <div className="column timeline container container-col">
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Update Camera</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Dispatch Terrain Module</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Mutate Draw Commands</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Execute Draw Commands</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column col-blue">Update Camera</div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column col-blue">Mutate Draw Commands</div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column col-blue">Execute Draw Commands</div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Update Camera</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Deserialize Draw Commands</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Dispatch Terrain Module</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Mutate Draw Commands</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-blue">Execute Draw Commands</div>
                    </div>

                    <div className="column timeline container container-col">
                      <div style={{width: 100 / 3 + '%' }} className="column empty"></div>
                      <div style={{width: 100 / 4 + '%' }} className="column caption">Waiting for worker... Reuse and modify old draw commands with new camera position.</div>
                      <div style={{width: 100 / 3 / 4 + '%' }} className="column empty"></div>
                      <div style={{width: 100 / 3 + '%' }} className="column empty"></div>
                    </div>

                    <h3 className="timeline-title">GPU Process</h3>
                    <div className="column timeline container container-col">
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 * 2 + '%'}} className="column col-green">draw</div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 4 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 4 * 2 + '%'}} className="column col-green">draw</div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column empty"></div>
                      <div style={{width: 100 / 3 / 5 + '%'}} className="column col-green">draw</div>
                    </div>

                    <h3 className="timeline-title">Frame Timing</h3>
                    <div className="column timeline container container-col">
                      <div style={{width: '33%'}} className="column col-green">Frame 1 (16ms)</div>
                      <div style={{width: '33%'}} className="column col-green">Frame 2 (16ms)</div>
                      <div style={{width: '33%'}} className="column col-green">Frame 3 (16ms)</div>
                    </div>
                  </div>
                </section>
                <section className="row">
                  <h2>Evaluation</h2>
                  <div className="container container-col">
                    <div className="column" style={{borderRight: '1px solid #ccc'}}>
                      <h3>Lightweight Main Process with Command Reuse</h3>
                      <img style={{width: '7in'}} src={require("./images/framerate.png")} />
                      <p>The main process strictly handles camera interaction and submitting commands to the GPU. Old commands are reused and "warped" if the new frame is not ready.</p>
                    </div>
                    <div className="column">
                      <h3>JavaScript vs. WebAssembly</h3>
                      <div className="container container-col">
                        <div className="column">
                          <img style={{width: '10in'}} src={require("./images/compare.png")} />
                          <p>Comparison of the rendering quality of JS and WASM builds. WebAssembly generates content faster and is able to output higher resolution geometry.</p>
                        </div>
                        <div className="column">
                          <img style={{width: '7in'}} src={require("./images/generation.png")} />
                          <p>Content generation with WebAssembly is roughly four to five times faster than JavaScript.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          </div>
      </Fragment>
    );
  }
}

render(<Page />, document.getElementById('root'));
