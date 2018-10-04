import React from 'react';
import styles from './TypeName.css';
import Typing from 'react-typing-animation';

class TypeName extends React.Component {
  
  render() {
    return (
      <div className={styles.shrinkText}>
        <p>Let's build something...</p>
        <div className={styles.typed}>
          <Typing speed={70} loop={true} >
            <p>New</p>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <p>Challenging</p>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <p>Imaginative</p>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <p>Engaging</p>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <p>Together</p>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <Typing.Reset count={1} delay={500} />
          </Typing>
        </div>
      </div>
    )
  }
}

export default TypeName;