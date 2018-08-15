import React, { Component } from 'react'
import data from 'app/data.json'
import Link from 'components/shared/Link/Link'
import Lines from './Lines/Lines'
import Line from './Line/Line'
import css from './Vim.scss'

class Vim extends Component {

  render () {
    return (
      <div className={css.Vim}>
        <Lines>
          <div kind="h1">Ross Haliburton Noble</div>
          <div></div>
          <div kind="h2">About / Work</div>
          <div></div>
          <div kind="bullet">Software developer from Vancouver, Canada 🇨🇦 </div>
          <div kind="bullet">
            <span>Former employers: </span>
            <Link href={data.links.tickit}>Tickit Health</Link>,{' '}
            <Link href={data.links.rocksauce}>Rock Sauce</Link>,{' '}
            <Link href={data.links.intel}>Intel</Link>,{' '}
            <Link href={data.links.passwordbox}>PasswordBox</Link>,{' '}
            <Link href={data.links.lesite}>Le Site</Link>{' '}
          </div>
          <div kind="bullet">Preferred tech: Ruby, JavaScript, Go</div>
          <div></div>
          <div kind="h2">Hobbies / Interests</div>
          <div></div>
          <div kind="bullet">
            Hiking (thru-hiked the <Link href={data.links.pcta}>{"PCT"}</Link> in 2016)
          </div>
          <div kind="bullet">
            Trail Running (<Link href={data.links.strava}>Strava</Link>)
          </div>
          <div kind="bullet">Crossword puzzles</div>
          <div></div>
          <div kind="h2">Projects</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.pjmsl}>PJM Softball</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.burnreel}>Burnreel</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.capitalg}>Capital G</Link> (defunct)
          </div>
          <div kind="bullet">
            <Link href={data.links.carabiner}>Carabiner</Link> (defunct)
          </div>
          <div></div>
          <div kind="h2">Contact / Links</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.instagram}>Instagram</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.github}>Github</Link>
          </div>
          <div kind="bullet">
            <a href={`mailto:${data.links.email}?subject=Hi`}>Email</a>
            <div className={css.Cursor} />
          </div>
        </Lines>

        <div className={css.StatusBar}>
          <div className={css.StatusTop}>
            {data.filename}
          </div>
          <div className={css.StatusBottom}>
            {data.filename} 20L, 326C written
          </div>
        </div>
      </div>
    )
  }
}

export default Vim
