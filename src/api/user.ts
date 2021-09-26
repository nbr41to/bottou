import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

import { dateFormatted } from '@/utils/dateFormatted';

// const db = getFirestore();
// const usersRef = collection(db, 'users');
// const usersDoc = (docId: string) => doc(db, `users/${docId}`);

export const createUser = async (params: {
  id: string;
  name: string;
}): Promise<void> => {
  try {
    const { id, name = '' } = params;
    const db = getFirestore();
    const initialUser: User = {
      id,
      name,
      bottou_status: '',
      bottou_points: 0,
      createdAt: dateFormatted(),
    };
    await setDoc(doc(db, 'users', id), initialUser);
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (params: { id: string }): Promise<User> => {
  try {
    const { id } = params;
    const db = getFirestore();
    const result = await getDoc(doc(db, `users/${id}`));
    const user = result.data() as User;
    if (!user) throw new Error('getUser: User not found!!');
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
