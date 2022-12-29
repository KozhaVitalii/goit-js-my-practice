// Задача 3: Напишите скрипт проверки подписки пользоватлея при доступе к контенту
//     - есть три типа подписки: free, pro, vip.
// - получить доступ могут только пользоватлея pro и vip.

const subscription = 'pro';
const canAccsessContent = subscription === 'pro' || subscription === 'vip';
console.log(
  `Есть доступ к контенту?`,
  canAccsessContent,
);