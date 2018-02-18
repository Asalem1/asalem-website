import React from 'react';
import { GridList, GridTile } from 'material-ui';
import * as images from './images/index';
import * as cpStyles from './CurrentProjects.scss'; // eslint-disable-line

const styles = {
  gridList: {
    minHeight: '100%',
    overflowY: 'auto',
    margin: '0 100px',
  },
  tileStyle: {
    fontFamily: 'Quicksand',
    fontSize: '25px',
  },
};

const tilesData = [
  {
    img: images.plantr,
    alt: 'Plantr Preview',
    href: 'https://organico-plantr.herokuapp.com',
    title: 'Plantr',
    role: 'Scrum Master',
  },
  {
    img: images.stackets,
    alt: 'Stackets Preview',
    href: 'https://stackets-orion.herokuapp.com',
    title: 'Stackets',
    role: 'Product Owner',
  },
  {
    img: images.thymer,
    alt: 'Thymer Preview',
    href: 'https://organico-plantr.herokuapp.com',
    title: 'Thymer',
    role: 'Software Engineer',
  },
];

export function CurrentProjectsClass() {
  return (
    <div
      className="gridlist-container"
      id="portfolio"
    >
      <div className="project-header">Projects</div>
      <GridList
        cols={3}
        cellHeight={350}
        padding={4}
        style={styles.gridList}
      >
        {
          tilesData.map(tile => (
            <a
              key={tile.img}
              target="_blank"
              href={tile.href}
              rel="noopener noreferrer"
            >
              <GridTile
                title={tile.title}
                subtitle={<span><b>ROLE: </b>{tile.role}</span>}
                cols={1}
                rows={1}
                tileStyle={styles.tileStyle}
              >
                <img
                  className="img-style"
                  alt={tile.alt}
                  src={tile.img}
                />
              </GridTile>
            </a>
          ))
        }
      </GridList>
    </div>
  );
}

export default CurrentProjectsClass;

/*
<div id="portfolio" className="project-info">
      <div className="row">
        <div className="col-md-3 offset-md-1 col-sm-11 project-body">
          <div className="row">
            <a
              target="_blank"
              href="https://organico-plantr.herokuapp.com"
              rel="noopener noreferrer"
            >
              <img
                className="project-picture"
                alt="Plantr"
                src="../../public/img/Plantr.jpg"
              />
            </a>
          </div>
          <div className="row">
            <br />
            <div className="project-info">
              <div className="project-name">
                PLANTR
              </div>
              <div className="project-description">
                <div>
                  Plantr is an online gardening and outdoor decor&nbsp;
                  service where you can create and plan your seasonal gardens&nbsp;
                  based on regional variations and personal needs.
                </div>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Scrum Master</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-11 project-body">
          <div className="row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackets-orion.herokuapp.com"
            >
              <img
                className="project-picture"
                src="../../public/img/Stackets.jpg"
                alt="Stackets"
              />
            </a>
          </div>
          <div className="row">
            <br />
            <div className="project-info">
              <div className="project-name">
                STACKETS
              </div>
              <div className="project-description">
                <div>
                  Stackets is a personalized programming assistant that allows users&nbsp;
                  to work through, solve, and store helpful tips and tricks for becoming&nbsp;
                  a computer programming.
                </div>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Product Owner</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-11 project-body">
          <div className="row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://organico-plantr.herokuapp.com"
            >
              <img
                className="project-picture"
                alt="Thymer"
                src="../../public/img/Thymer.jpg"
              />
            </a>
          </div>
          <div className="row">
            <br />
            <div className="project-info">
              <div className="project-name">
                THYMER
              </div>
              <div className="project-description">
                <div>
                  Thymer is the personal Sous Chef you never knew you needed.&nbsp;
                  From automated timers that keep you on track, to vocalized&nbsp;
                  recipes, this app makes cooking fun and easy.
                </div>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Software Engineer</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
