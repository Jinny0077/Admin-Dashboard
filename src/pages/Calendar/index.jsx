import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { tokens } from "../../theme";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
} from "@mui/material";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core/index.js";
import { useTheme } from "@emotion/react";
import FullCalendar from "@fullcalendar/react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import TitleText from "../../utils/constant";
import Input from "../../components/Input/index";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const formRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const eventSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .max(10, "Maximum 10 character"),
  });
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors: eventError },
  } = useForm({
    defaultValues: {
      title: "",
    },

    resolver: yupResolver(eventSchema),
  });

  const handleCancel = () => {
    setIsModalVisible(false);
    reset();
  };

  const handleSave = () => {
    if (selectedDate) {
      const title = getValues("title");

      selectedDate.view.calendar.addEvent({
        id: `${selectedDate.dateStr}-${title}`,
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });

      setIsModalVisible(false);
      reset();

      Swal.fire(
        TitleText.SWEEtALERTTEXT.alerttitle_success,
        "Event Saved Successful.",
        "success"
      );
    }
  };

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setIsModalVisible(true);
  };

  const handleEventClick = (selected) => {
    Swal.fire({
      title: "Confirmation to delete event",
      text: TitleText.SWEEtALERTTEXT.alerttext_warning,
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: TitleText.SWEEtALERTTEXT.lbl_delete,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          selected.event.remove();
          Swal.fire(
            TitleText.SWEEtALERTTEXT.alerttitle_success,
            "Event has been deleted!",
            "success"
          );
        } catch (error) {
          Swal.fire(
            TitleText.SWEEtALERTTEXT.alerttitle_failed,
            TitleText.SWEEtALERTTEXT.alerttext_error,
            "error"
          );
        }
      }
    });
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1", title: "All-day event", date: "2024-05-14" },
              { id: "2", title: "Timed event", date: "2024-05-20" },
            ]}
          />
        </Box>
      </Box>
      <Dialog
        open={isModalVisible}
        onClose={handleCancel}
        fullWidth
        maxWidth={"sm"}
      >
        <form
          ref={formRef}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit(handleSave)}
        >
          <DialogTitle>Create New Event</DialogTitle>
          <DialogContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography sx={{ marginRight: "10px", marginTop: "15px" }}>
                Title:
              </Typography>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    fullWidth
                    label="Title *"
                    type="text"
                    error={!!eventError.title}
                    helperText={eventError.title?.message}
                  />
                )}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              // onClick={handleSave}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>

            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default Calendar;
