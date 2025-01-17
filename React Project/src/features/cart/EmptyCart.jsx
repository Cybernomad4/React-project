import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Назад к меню</LinkButton>

      <p className="mt-7 font-semibold">
        Ваша корзина пуста, начните делать заказ...
      </p>
    </div>
  );
}

export default EmptyCart;
