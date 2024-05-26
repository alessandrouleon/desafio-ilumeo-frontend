import Button from "@mui/material/Button";

interface CustomButtonProps {
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  title: string;
  sx?: object;
}

export function CustomButton({
  variant = "contained",
  onClick,
  title,
  sx = {},
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth
      sx={{
        ...sx,
        marginTop: "1rem",
        padding: "0.6rem 0 0.5rem 0",
        fontWeight: "bold"
      }}
    >
      {title}
    </Button>
  );
}
