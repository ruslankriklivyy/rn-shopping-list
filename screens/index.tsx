import { ShoppingList } from "@/components/shoppingList/ShoppingList";
import MainLayout from "@/layouts/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <ShoppingList />
    </MainLayout>
  );
}
