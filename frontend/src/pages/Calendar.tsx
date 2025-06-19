import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';

const Calendar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save rehearsal logic would go here
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Rehearsal Calendar
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            New Rehearsal
          </Button>
        </Box>

        <Paper sx={{ p: 2, height: 'calc(100vh - 200px)', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', py: 10 }}>
            Calendar component will be integrated here.
          </Typography>
        </Paper>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Schedule New Rehearsal</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <DateTimePicker
                  label="Start Time"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DateTimePicker
                  label="End Time"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  placeholder="e.g., Weekly Rehearsal"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Venue</InputLabel>
                  <Select label="Venue">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="venue1">Main Studio</MenuItem>
                    <MenuItem value="venue2">Practice Room B</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Band</InputLabel>
                  <Select label="Band">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="band1">The Rock Stars</MenuItem>
                    <MenuItem value="band2">Jazz Ensemble</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="Add details about this rehearsal..."
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained">
              Schedule
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
};

export default Calendar;