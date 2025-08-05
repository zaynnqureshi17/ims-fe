import { brandsActions } from "@/utils/PublicImageBaseUrl";
import IconBg from "./IconBg";

interface ActionsButtonProps {
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  itemId: number;
}

const ActionButtons = ({
  onEdit,
  onDelete,
  onView,
  itemId,
}: ActionsButtonProps) => {
  return (
    <div className="flex  gap-2">
      {onEdit && (
        <IconBg
          icon={`${brandsActions}edit.svg`}
          title="Edit"
          width={16}
          height={16}
          className="!p-0 cursor-pointer"
          onClick={() => onEdit?.(itemId)}
        />
      )}
      {onDelete && (
        <IconBg
          icon={`${brandsActions}delete.svg`}
          title="Delete"
          width={16}
          height={16}
          className="!p-0 cursor-pointer"
          onClick={() => onDelete?.(itemId)}
        />
      )}
      {onView && (
        <IconBg
          icon={`${brandsActions}view.svg`}
          title="View"
          width={16}
          height={16}
          className="!p-0 cursor-pointer"
          onClick={() => onView?.(itemId)}
        />
      )}
    </div>
  );
};

export default ActionButtons;
