import { Button } from "@/components/ui/button";

const EmptyState = () => {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed">
      <h2>You don't have any short videos created</h2>
      <Button>Create New Short Video</Button>
    </div>
  );
};

export default EmptyState;
