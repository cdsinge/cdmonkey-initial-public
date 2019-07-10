import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      activeStyle={{
      fontWeight: 'bold',
      fontSize: "0.9rem"
    }}
    style={{ color: 'black'}}
    to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0rem 1rem 0rem 1rem`,
        padding: `0.5rem 0.5rem`,
      }}
    >
      <h1 style={{ margin: "0 0 0 18%", display: `inline-block` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: '2rem',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ display: `inline-block`, listStyle: `none`,
                   margin: `1rem 20% 0 1rem`,
                   float: `right`, 
                   paddingBottom: '0', marginBottom: 0}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/musings/">Musings</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
