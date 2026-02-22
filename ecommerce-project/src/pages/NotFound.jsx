import { Header } from '../components/header';

export function NotFound({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '150px', marginBottom: '0'}}>404</h1>
        <p style={{ fontSize: '20px'}}>Page not found</p>
      </div>
    </>
  );
}