import { getAuth } from '@firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore';

export const createBottou = async (params: {
  type: BottouType;
}): Promise<void> => {
  try {
    const { type } = params;
    const db = getFirestore();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    /* transaction */
    await runTransaction(db, async (transaction) => {
      /* Bottouリストの新規作成 */
      const newBottouRef = doc(collection(db, 'bottou_list'));
      transaction.set(newBottouRef, {
        id: newBottouRef.id,
        userId,
        type,
        startedAt: serverTimestamp(),
        closed: false,
      } as Bottou);

      /* ユーザーの状態を更新 */
      transaction.update(doc(db, `users/${userId}`), {
        bottou_status: newBottouRef.id,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getBottou = async (params: { id: string }): Promise<Bottou> => {
  const db = getFirestore();
  const { id } = params;
  const bottouRef = doc(collection(db, 'bottou_list'), id);
  const result = await getDoc(bottouRef);
  // .withConverter(bottouConverter);
  return result.data() as Bottou;
};

export const achievedBottou = async (params: {
  id: string;
}): Promise<number> => {
  const { id } = params;
  const db = getFirestore();
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  const reward = Math.floor(Math.random() * 100) + 1;

  await runTransaction(db, async (transaction) => {
    /* 現在のユーザーのポイントを取得 */
    const userDoc = await transaction.get(doc(db, 'users', userId));
    const user = userDoc.data() as User;

    /* UserのBottou状態を更新 */
    transaction.update(doc(collection(db, 'users'), userId), {
      bottou_status: '',
      bottou_points: user.bottou_points + reward,
    });

    /* BottouをClosedに */
    transaction.update(doc(db, 'bottou_list', id), {
      closed: true,
    } as Bottou);
  });
  return reward;
};
