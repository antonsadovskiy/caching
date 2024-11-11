import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Api } from '../../entities/api';
import { UserType } from '../../entities/api/types.ts';

export const PostPage = () => {
  const params = useParams<{ id: string }>();

  const [user, setUser] = useState<UserType | undefined>();

  const userId = params.id;

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const res = await Api.getUserMessages(Number(userId));
          setUser(res.data);
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [userId]);

  return <div>{user?.email}</div>;
};
