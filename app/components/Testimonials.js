import React from 'react';
import { Avatar, List, ListItem } from 'material-ui';
import * as images from './images/index';

export function TestimonialsClass() {
  return (
    <div id="testimonials" className="container">
      <div>
        <div className="testimonials-divide">
          Testimonials
        </div>
      </div>
      <div className="row">
        <div className="testimonials">
          <List>
            <ListItem
              leftAvatar={<Avatar src={images.pamela} />}
              primaryText={
                <div className="founder-name">
                  Pamela Sandler
                </div>
              }
              secondaryText={
                <p className="testimonials-description">
                  <span className="founder">
                    Founder of&nbsp;
                    <a
                      href="https://www.nourishroots.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Nourish Roots
                    </a>
                  </span>
                  &nbsp;--&nbsp;Ariel&apos;s talent, creativity and dedication are extremely
                  impressive. He listened attentively to exactly what I wanted
                  and recreated a vision that positively exceeded my
                  expectations above and beyond. Highly recommend!
                </p>
              }
              secondaryTextLines={2}
            />
            <ListItem
              leftAvatar={<Avatar src={images.nux} />}
              primaryText={
                <div className="founder-name">
                  Marissa Nuckels
                </div>
              }
              secondaryText={
                <p className="testimonials-description">
                  <span className="founder">
                    Founder of&nbsp;
                    <a
                      href="http://www.thehomestead.life/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      The Homestead
                    </a>
                  </span>
                  &nbsp;--&nbsp;Ariel was able to build mean entire website within a week,
                  while other programmers were giving me estimates of a month. He works with
                  passion, and gives it his all. I&apos;m happy with all the work he accomplished.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsClass;
