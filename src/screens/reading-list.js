import * as React from 'react'
import {Link} from 'components/lib'
import {ListItemList} from 'components/list-item-list'

function ReadingListScreen() {
  return (
    <ListItemList
      filterListItems={li => !li.finishDate}
      noListItems={
        <p>
          Witaj na stronie z książkami do przeczytania. Przejdź na stronę <Link to="/discover">Odkrywaj Książki</Link> Aby dodać jakąś do tej listy
        </p>
      }
      noFilteredListItems={
        <p>
          Wygląda na to że przeczytano wszystkie książki, zajrzyj na stronę {' '}
          <Link to="/finished">Przeczytane</Link> lub{' '}
          <Link to="/discover">Odkrywaj Książki</Link>.
        </p>
      }
    />
  )
}

export {ReadingListScreen}
