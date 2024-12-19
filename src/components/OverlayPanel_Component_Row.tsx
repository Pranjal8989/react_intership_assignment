import React from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

interface OverlayPanelData {
  overlay: React.RefObject<OverlayPanel>;
  selectCount: number;
  totalRecords: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const OverlayPanel_for_SelectRow: React.FC<OverlayPanelData> = ({
  overlay,
  selectCount,
  totalRecords,
  onChange,
  onSubmit,
}) => {
  const isValid = selectCount >= 1 && selectCount <= totalRecords;
  return (
    <OverlayPanel ref={overlay}>
      <div>
        <label htmlFor="select_row">Select Rows</label>
        <input
          id="select_row"
          type="number"
          value={selectCount}
          onChange={onChange}
          min="1"
          max={totalRecords}
          placeholder="Select Rows.."
          style={{ width: "100%" }}
        />
        <Button
          label="Submit"
          icon="pi pi-check"
          onClick={onSubmit}
          style={{ marginTop: "10px" }}
          disabled={!isValid}
        />
      </div>
    </OverlayPanel>
  );
};

export default OverlayPanel_for_SelectRow;
