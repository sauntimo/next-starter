import * as React from 'react';

import { User } from '../../interfaces';

type Props = {
  item: User
}

const ListDetail: React.FC<Props> = ({ item: user }: Props): React.ReactElement => (
  <div>
    <h1>
      Detail for
      {user.name}
    </h1>
    <p>
      ID:
      {user.id}
    </p>
  </div>
);

export default ListDetail;
