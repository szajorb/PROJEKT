import * as React from 'react'
import {Link} from 'components/lib'
import {ListItemList} from 'components/list-item-list'

function FinishedScreen() {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noListItems={
        <p>
          Tutaj znajdą się przeczytane przez ciebie książki. Zajrzyj na stronę {' '}
          <Link to="/discover">Odkrywaj</Link> aby dodać książki do listy
        </p>
      }
      noFilteredListItems={
        <p>
          Wygląda na to że masz trochę książek do przeczytania, sprawdź książki {' '}
          <Link to="/list">Do Przeczytania</Link> lub{' '}
          <Link to="/discover">Odkrywaj Książki</Link>.
        </p>
      }
    />
  )
}

export {FinishedScreen}
