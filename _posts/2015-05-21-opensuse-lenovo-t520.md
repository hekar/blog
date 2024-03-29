---
title: "Thinkpad T520 - OpenSUSE 13.2"
date: "2015-05-21"
category: linux
tags: linux
---

Getting a Thinkpad T520’s NVIDIA Quadro video card working with OpenSUSE 13.2 or other modern distributions does not have to be the hard.

Many modern laptops only support video output (DVI, HDMI, Display Port) on the dedicated GPU. Fortunately, on the T520, we can easily configure Linux to use the NVIDIA video card as the primary card. Avoiding any screen tearing or other issues you're traditionally notice from the video output being copied between the integrated and dedicated graphics processors.

---

Keep in mind, that this means losing the efficiency of the Intel video card. There is little to work around to this solution as configuring the Intel and NVIDIA cards to work together with a stable and performant digital output signal is rather complicated. I will not cover this in this tutorial. Instead, I have underclocked my NVIDIA card to deal with the fact that it generates more heat than the Intel based card.

Heat dispersion is important, as the CPU and GPU on main laptops are connected to the same heatsink. Constant usage of the higher end video card can result in excessive heat generation and rise the CPU temperature. This can drastically affect speeds, as the CPU will lower its clock speed to compensate for the temperature rise.

This tutorial assumes that you have the Linux distribution installed already installed. **If you are having trouble installing the Linux distribution, because it freezes when loading X11 disable ACPI**.

## 1. Configure the BIOS

The most important step is to configure the BIOS to use the NVIDIA card rather than Optimus. This can be done by selecting the Display configuration option located under the Hardware section of the BIOS. You may also configure your primary display output (ie. DVI 1, DVI 2, Display Port 1, etc.). The configuration of the primary display output even works with the Lenovo Docking stations.

## 2. Install the NVIDIA proprietary driver

From here on is OpenSUSE 13.2 specific.

https://en.opensuse.org/SDB:NVIDIA_drivers#The_repository_way

Installing the NVIDIA driver is pretty simple. Do not reboot until you have fully configured OpenSuse.

```sh
zypper ar -f ftp://download.nvidia.com/opensuse/13.2/ nvidia
sudo zypper in x11-video-nvidiaG04
```

## 3. Blacklist the Nouveau and Intel driver

Append `blacklist i915` and `blacklist nouveau` to "/etc/modprobe.d/50-blacklist.conf":

```sh
blacklist i915
blacklist nouveau
```

### Commands

```sh
echo 'blacklist i915' | sudo tee  --append /etc/modprobe.d/50-blacklist.conf
echo 'blacklist nouveau' | sudo tee  --append /etc/modprobe.d/50-blacklist.conf
```

## 4. Configure Kernel Parameters

Edit /etc/default/grub

```sh
sudo vim /etc/default/grub
```

Change

```sh
GRUB_CMDLINE_LINUX_DEFAULT=" BOOT_IMAGE=/boot/x86_64/loader/linux ramdisk_size=512000 ramdisk_blocksize=4096 resume=/dev/sda2"
```

To look like (append `acpi_osi=Linux nomodeset` to `GRUB_CMDLINE_LINUX_DEFAULT`):

```sh
GRUB_CMDLINE_LINUX_DEFAULT=" BOOT_IMAGE=/boot/x86_64/loader/linux ramdisk_size=512000 ramdisk_blocksize=4096 resume=/dev/sda2 acpi_osi=Linux nomodeset"
```

Afterwards run:

```sh
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

Hopefully it all works out.

## 5. Troubleshooting

Most of my issues have usually been ACPI configuration. If you have a different laptop try removing `acpi_osi=Linux` or using various other ACPI configuration options.

See for more information: https://tr.opensuse.org/SDB:Kernel_Parameters_for_ACPI/APIC

Message me on Twitter or visit the OpenSUSE forums for help.
