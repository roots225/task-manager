import AppGlobalSearch from "./AppGlobalSearch";

export default function AppHeader() {
  return (
    <div className="app-header">
      <div className="left-side">
        <h3>Tableau de bord</h3>
        <AppGlobalSearch />
      </div>
      <div>Username</div>
    </div>
  );
}
